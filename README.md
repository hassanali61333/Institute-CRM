# FIT Institute CRM - Student Portal

A React-based student portal I built for FIT Institute. Students can log in, mark their attendance (only if they're physically on campus), and keep track of their form submissions.

This is a **frontend project** — all the UI, state management, and API integration is handled on the client side.

---

# Live Demo

[https://institute-crm-nine.vercel.app/](https://institute-crm-nine.vercel.app/)

---

## What It Does

- Login / Signup** – Firebase token validation on top of a regular email-password flow
- Geo-based Attendance** – Attendance only gets marked if the student is within 150 meters of the campus. Uses the browser's geolocation API.
- Form Submission Tracking** – Keeps the latest submission ID in Redux and localStorage so the user doesn't lose it on refresh
- Redux Toolkit** – One slice handles user data, attendance state, and form IDs
- Fully Responsive** – Tested on mobile, tablet, and desktop
- Toast Notifications** – For every success/error case (using React Toastify)

---

# Tech I Used

| What | Which |
|------|-------|
| Framework | React 18 + React Router DOM |
| State | Redux Toolkit |
| Auth | Firebase (client SDK) |
| Styling | Plain CSS (no framework) |
| Notifications | React Toastify |
| Hosting | Vercel |
| Perf Tools | PageSpeed Insights, Chrome DevTools |

---

## The Performance Part (Where I Spent Most Time)

When I first deployed this on Vercel, the mobile PageSpeed score was **79**. That bugged me, so I dug into it and got it up to **96**. Here's the whole story.

### Before vs After

before VS after
|--------|--------|-------|
| Mobile Performance Score | 79 | **96** |
| LCP (Largest Contentful Paint) | 5.6 s | **2.7 s** |
| FCP (First Contentful Paint) | 1.1 s | ~0.9 s |
| Total Blocking Time | 70 ms | ~30 ms |
| Cumulative Layout Shift | 0 | 0 |
| Accessibility | — | 92 |
| Best Practices | — | 100 |
| SEO | — | 100 |

### What Was Slowing It Down

I opened up PageSpeed Insights and Chrome DevTools, and found four things:

1. A CSS animation was blocking the LCP element.** There was a `<p>` tag with `opacity: 0` and `animation: infinite` — the browser was waiting for that animation to finish before painting the "Login to Your Account" heading. That heading was the LCP element, so it was getting delayed by over a second.
2. Firebase was loading on the first render.** The `getFirebaseToken` import was at the top of `Login.jsx`, so the whole Firebase SDK (~300KB) was being pulled in even before the user typed anything.
3. Toastify and other imports were synchronous.** Same problem — the main thread was busy parsing stuff the user didn't need yet.
4. No caching on Vercel.** Every visit was re-downloading the same static assets.

# What I Did

**1. Removed the animation from the LCP element**
