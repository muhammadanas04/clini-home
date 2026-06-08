"use client";

import Link from "next/link";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "var(--bg-surface)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div
        className="animate-pop-in"
        style={{
          maxWidth: "480px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "48px 32px",
          boxShadow: "var(--shadow-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "rgba(255, 59, 48, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--severity-high)",
          }}
        >
          <ShieldAlert size={32} />
        </div>

        <div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "26px",
              fontWeight: 800,
              color: "var(--text-primary)",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            We couldn't find this page on our server. The link might be broken or the page has been moved.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", width: "100%", justifyContent: "center" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              flex: 1,
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              padding: "12px 20px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <ArrowLeft size={14} /> Go Back
          </button>
          
          <Link
            href="/"
            style={{
              flex: 1,
              background: "var(--purple-primary)",
              color: "white",
              padding: "12px 20px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.15)",
            }}
          >
            <Home size={14} /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}
