// store/store.js
// list layout sample — two nursing products (demo + full)
const store = {
  products: [
    {
      id: "nursing-demo",
      category: "nursing",
      title: "Nursing Prometric Demo — 20 Questions (Free)",
      short: "Free 20-question demo simulation with instant scoring and brief rationales.",
      long: "This demo provides a short Prometric-style experience to evaluate your readiness. Mobile-friendly. Great to try before buying the full test packages.",
      img: "/assets/nursing/prometric-demo.svg",
      demo: "https://script.google.com/macros/s/AKfycbwQX3XRFHwz5u5t1A8ROqaRO8U0yw019UC19lwQjQYqTmKO9iGhjVqBeBGiGYDKvFkJ/exec",
      full: "",
      whatsapp: "https://wa.me/6285399652487?text=I%20want%20to%20unlock%20the%20Nursing%20Prometric%20Full%20Package",
      price: "Free demo"
    },
    {
      id: "nursing-full",
      category: "nursing",
      title: "Nursing Prometric Full Test — Full Simulation",
      short: "Full Prometric-style simulation hosted on our site (timed, scoring, answers).",
      long: "Full 75–100 question simulation designed to mimic real Prometric exams. Includes randomized questions, time limits, and full explanations. Best for serious exam preparation.",
      img: "/assets/nursing/prometric-full.svg",
      demo: "https://script.google.com/macros/s/AKfycbwQX3XRFHwz5u5t1A8ROqaRO8U0yw019UC19lwQjQYqTmKO9iGhjVqBeBGiGYDKvFkJ/exec",
      full: "https://gyoutrain-lab.github.io/production-prometrictest6/",
      whatsapp: "https://wa.me/6285399652487?text=I%20want%20to%20unlock%20the%20Nursing%20Prometric%20Full%20Test",
      price: "Paid"
    }
  ]
};
