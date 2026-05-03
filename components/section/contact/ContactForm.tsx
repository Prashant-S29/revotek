"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { contactPageContent } from "@/content/contact.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),

  phone: z
    .string()
    .min(1, "Phone number is required.")
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),

  email: z
    .union([z.literal(""), z.string().email("Enter a valid email address.")])
    .optional(),

  message: z
    .string()
    .min(1, "Message is required.")
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be 1000 characters or fewer."),
});

type ContactValues = z.infer<typeof contactSchema>;

function validateField<K extends keyof ContactValues>(
  field: K,
  value: ContactValues[K],
): string | undefined {
  const result = contactSchema.shape[field].safeParse(value);
  if (!result.success) {
    return result.error.issues[0].message;
  }
  return undefined;
}

function extractErrorMessage(errors: unknown[]): string | undefined {
  if (!errors.length) return undefined;
  const first = errors[0];
  if (typeof first === "string") return first;
  if (first && typeof first === "object" && "message" in first) {
    return (first as { message: string }).message;
  }
  return undefined;
}

export const ContactForm: React.FC = () => {
  const { form: formContent } = contactPageContent;
  const { fields, submit, feedback } = formContent;

  const [formState, setFormState] = React.useState<FormState>("idle");

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    } satisfies ContactValues,

    onSubmit: async ({ value }) => {
      setFormState("loading");
      try {
        console.log(value);

        // if (response.ok) {
        //   setFormState("success");
        //   form.reset();
        // } else {
        //   setFormState("error");
        // }
      } catch {
        setFormState("error");
      }
    },
  });

  const handleRetry = () => setFormState("idle");

  if (formState === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center text-center gap-4 py-16 px-8 rounded-2xl bg-green-50 border border-green-200"
      >
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100"
        >
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-green-800">
          {feedback.success.heading}
        </h2>
        <p className="text-sm text-green-700 max-w-sm">
          {feedback.success.message}
        </p>
      </div>
    );
  }

  if (formState === "error") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center text-center gap-4 py-16 px-8 rounded-2xl bg-red-50 border border-red-200"
      >
        <div
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100"
        >
          <svg
            className="h-7 w-7 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-red-800">
          {feedback.error.heading}
        </h2>
        <p className="text-sm text-red-700 max-w-sm">
          {feedback.error.message}
        </p>
        <Button
          type="button"
          onClick={handleRetry}
          variant="outline"
          className="mt-2 border-red-300 text-red-700 hover:bg-red-50"
        >
          Try Again
        </Button>
      </div>
    );
  }

  const isLoading = formState === "loading";

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary">
        {formContent.heading}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {formContent.description}
      </p>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="mt-8 space-y-6"
        aria-label="Contact Revotek Elevators"
      >
        <form.Field
          name="name"
          validators={{ onChange: ({ value }) => validateField("name", value) }}
        >
          {(field) => {
            const error = extractErrorMessage(field.state.meta.errors);
            return (
              <div className="space-y-1.5">
                <Label
                  htmlFor={field.name}
                  className="text-sm font-medium text-primary"
                >
                  {fields.name.label}
                  <span aria-hidden="true" className="ml-1 text-red-500">
                    *
                  </span>
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={!!error}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                  placeholder={fields.name.placeholder}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  disabled={isLoading}
                  className={
                    error
                      ? "border-red-400 bg-red-50 focus-visible:ring-red-400/40"
                      : ""
                  }
                />
                {error && (
                  <p
                    id={`${field.name}-error`}
                    role="alert"
                    className="text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <form.Field
          name="phone"
          validators={{
            onChange: ({ value }) => validateField("phone", value),
          }}
        >
          {(field) => {
            const error = extractErrorMessage(field.state.meta.errors);
            return (
              <div className="space-y-1.5">
                <Label
                  htmlFor={field.name}
                  className="text-sm font-medium text-primary"
                >
                  {fields.phone.label}
                  <span aria-hidden="true" className="ml-1 text-red-500">
                    *
                  </span>
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  required
                  aria-required="true"
                  aria-invalid={!!error}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                  placeholder={fields.phone.placeholder}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  disabled={isLoading}
                  maxLength={10}
                  className={
                    error
                      ? "border-red-400 bg-red-50 focus-visible:ring-red-400/40"
                      : ""
                  }
                />
                {error && (
                  <p
                    id={`${field.name}-error`}
                    role="alert"
                    className="text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => validateField("email", value),
          }}
        >
          {(field) => {
            const error = extractErrorMessage(field.state.meta.errors);
            return (
              <div className="space-y-1.5">
                <Label
                  htmlFor={field.name}
                  className="text-sm font-medium text-primary"
                >
                  {fields.email.label}
                  <span className="ml-1 text-muted-foreground text-xs">
                    (optional)
                  </span>
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!error}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                  placeholder={fields.email.placeholder}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  disabled={isLoading}
                  className={
                    error
                      ? "border-red-400 bg-red-50 focus-visible:ring-red-400/40"
                      : ""
                  }
                />
                {error && (
                  <p
                    id={`${field.name}-error`}
                    role="alert"
                    className="text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) => validateField("message", value),
          }}
        >
          {(field) => {
            const error = extractErrorMessage(field.state.meta.errors);
            const maxLength = 1000;
            return (
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <Label
                    htmlFor={field.name}
                    className="text-sm font-medium text-primary"
                  >
                    {fields.message.label}
                    <span aria-hidden="true" className="ml-1 text-red-500">
                      *
                    </span>
                  </Label>
                  <span
                    aria-live="polite"
                    className={`text-xs tabular-nums ${
                      field.state.value.length > maxLength * 0.9
                        ? "text-amber-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {field.state.value.length}/{maxLength}
                  </span>
                </div>
                <Textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={!!error}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                  placeholder={fields.message.placeholder}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  disabled={isLoading}
                  maxLength={maxLength}
                  className={`resize-none ${error ? "border-red-400 bg-red-50 focus-visible:ring-red-400/40" : ""}`}
                />
                {error && (
                  <p
                    id={`${field.name}-error`}
                    role="alert"
                    className="text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          }}
        </form.Field>

        <p className="text-xs text-muted-foreground">
          Fields marked{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>{" "}
          <span className="sr-only">(asterisk)</span> are required.
        </p>

        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button
              type="submit"
              disabled={isLoading || isSubmitting}
              className="w-full sm:w-auto min-w-40"
              aria-busy={isLoading || isSubmitting}
            >
              {isLoading || isSubmitting ? submit.labelLoading : submit.label}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
};
