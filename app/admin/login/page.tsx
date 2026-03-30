"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/admin/actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand-50 px-4">
      <div className="w-full max-w-sm">
        {/* Logo / heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-wood-600 text-2xl text-white shadow-md">
            ✦
          </div>
          <h1 className="text-2xl font-bold text-choc-900">Adminpanel</h1>
          <p className="mt-1 text-sm text-choc-500">Wellness Studio – bokningshantering</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sand-200">
          <form action={formAction} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-choc-700 mb-1.5"
              >
                Lösenord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                autoFocus
                className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-sand-200 placeholder:text-choc-400 focus:outline-none focus:ring-2 focus:ring-wood-400 transition-shadow bg-white"
                placeholder="••••••••"
              />
            </div>

            {state?.error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
              >
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-wood-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-wood-500 focus:outline-none focus:ring-2 focus:ring-wood-400 focus:ring-offset-2 disabled:opacity-50"
            >
              {pending ? "Loggar in…" : "Logga in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
