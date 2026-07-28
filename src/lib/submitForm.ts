// Contact form submission utility

const ENDPOINT_BASE = "submit-form";
const ENDPOINT_ID = "8yqPhUs5T";

function buildEndpoint(): string {
  return `https://${ENDPOINT_BASE}.com/${ENDPOINT_ID}`;
}

/**
 * Submits contact form data to the configured endpoint.
 */
export async function submitContactForm(
  fields: Record<string, string>,
  options?: { formSource?: string },
): Promise<void> {
  const data: Record<string, string> = {};

  for (const [key, value] of Object.entries(fields)) {
    const trimmed = value.trim();
    if (trimmed) {
      data[key] = trimmed;
    }
  }

  if (options?.formSource) {
    data["_subject"] = options.formSource;
  }

  const res = await fetch(buildEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }
}
