import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  businessName: string;
  whatsappNumber: string;
  email: string;
  services: string[];
  budget: string;
  description: string;
  _hp?: string; // Honeypot field for bot spam prevention
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Honeypot Bot Trap Check
    if (body._hp && body._hp.trim().length > 0) {
      // Silently return success to bot without processing
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Comprehensive Server-Side Validation
    const errors: Record<string, string> = {};

    const name = (body.name || "").trim();
    if (!name || name.length < 2) {
      errors.name = "Full name must be at least 2 characters.";
    }

    const businessName = (body.businessName || "").trim();
    if (!businessName || businessName.length < 2) {
      errors.businessName = "Business or brand name is required.";
    }

    const email = (body.email || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please provide a valid business email address.";
    }

    const whatsappNumber = (body.whatsappNumber || "").trim();
    const phoneDigits = whatsappNumber.replace(/[^0-9]/g, "");
    if (!whatsappNumber || phoneDigits.length < 7 || phoneDigits.length > 15) {
      errors.whatsappNumber = "Please provide a valid WhatsApp number with country code.";
    }

    const services = Array.isArray(body.services) ? body.services : [];
    if (services.length === 0) {
      errors.services = "Please select at least one required service.";
    }

    const budget = (body.budget || "").trim();
    if (!budget) {
      errors.budget = "Please select an estimated budget range.";
    }

    const description = (body.description || "").trim();
    if (!description || description.length < 10) {
      errors.description = "Please describe your project or business goals in at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please correct the highlighted fields.",
        },
        { status: 400 }
      );
    }

    // 3. Sanitized Lead Object
    const sanitizedLead = {
      receivedAt: new Date().toISOString(),
      name: name.slice(0, 100),
      businessName: businessName.slice(0, 120),
      email: email.toLowerCase().slice(0, 120),
      whatsappNumber: whatsappNumber.slice(0, 25),
      services,
      budget,
      description: description.slice(0, 3000),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
      userAgent: req.headers.get("user-agent") || "unknown",
    };

    // 4. Server-Side Logging
    console.log("[OUTKAST STUDIOS LEAD RECEIVED]", JSON.stringify(sanitizedLead, null, 2));

    // 5. Optional Webhook Dispatch (e.g. Slack, Discord, Zapier, or Email Service)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `New project enquiry from **${sanitizedLead.name}** (${sanitizedLead.businessName})\nServices: ${sanitizedLead.services.join(", ")}\nBudget: ${sanitizedLead.budget}\nWhatsApp: ${sanitizedLead.whatsappNumber}\nEmail: ${sanitizedLead.email}\nDescription: ${sanitizedLead.description}`,
            lead: sanitizedLead,
          }),
        });
      } catch (webhookErr) {
        console.error("[OUTKAST WEBHOOK ERROR]", webhookErr);
        // Do not fail user submission if external webhook times out
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Project brief received successfully. Our creative director will review your goals and reach out within 24 hours.",
        leadRef: `OKS-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[OUTKAST CONTACT API ERROR]", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please try again or reach out via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
