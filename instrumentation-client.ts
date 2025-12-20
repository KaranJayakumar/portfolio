import posthog from 'posthog-js'
posthog.init(String(process.env.NEXT_PUBLIC_POSTHOG_KEY), {
    api_host: '/ph',
    defaults: '2025-11-30'
});
