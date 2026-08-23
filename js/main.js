/* =========================================================================
   Sneh Duggal — Personal Site — behavior
   Renders RESUME (from resume-data.js) into the DOM + drives animations.
   ========================================================================= */

(() => {
  "use strict";

  const R = window.RESUME;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (str = "") =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const externalLinkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>`;

  /* ---------------- theme ---------------- */
  function initTheme() {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored) root.setAttribute("data-theme", stored);
    $("#themeToggle").addEventListener("click", () => {
      const current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---------------- render content ---------------- */
  function renderHero() {
    $("#heroName").textContent = R.name;
    const meta = [
      `<span><i class="pulse-dot"></i>${esc(R.location)}</span>`,
      R.status ? `<span>${esc(R.status)}</span>` : "",
    ].filter(Boolean).join("");
    $("#heroMeta").innerHTML = meta;
    $("#resumeBtn").href = R.resumeFile;
    $("#footerName").textContent = R.name;
    $("#footerYear").textContent = new Date().getFullYear();
    document.title = `${R.name} — ${R.role[0]}`;
  }

  function renderAbout() {
    const initials = R.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    $("#avatarCore").textContent = initials;
    $("#aboutCopy").innerHTML = `
      <p>${esc(R.about).replace(/\n\s*/g, " ")}</p>
      <span class="goal-tag">GOALS</span>
      <p>${esc(R.goals).replace(/\n\s*/g, " ")}</p>
    `;

    $("#eduWrap").innerHTML = R.education.map((e) => `
      <div class="edu-row">
        <div>
          <div class="edu-school">${esc(e.school)}</div>
          <div class="edu-loc">${esc(e.location)}</div>
          <div class="edu-degree">${esc(e.degree)}</div>
          ${e.details ? `<div class="edu-details">${esc(e.details)}</div>` : ""}
        </div>
        <div class="edu-date">${esc(e.date)}</div>
      </div>
    `).join("");
  }

  function renderExperience() {
    $("#timeline").innerHTML = R.experience.map((job) => `
      <div class="tl-item reveal">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <div class="tl-top">
            <div>
              <div class="tl-title">${esc(job.title)}</div>
              <div class="tl-org">${esc(job.org)}${job.location ? ` · <span class="tl-loc">${esc(job.location)}</span>` : ""}</div>
            </div>
            <div class="tl-date">${esc(job.date)}</div>
          </div>
          <ul class="tl-bullets">
            ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
          </ul>
          ${job.link ? `<a class="tl-link" href="${esc(job.link)}" target="_blank" rel="noopener">${esc(job.linkLabel || "View link")} ${externalLinkIcon}</a>` : ""}
        </div>
      </div>
    `).join("");
  }

  function renderProjects() {
    $("#projectGrid").innerHTML = R.projects.map((p) => `
      <div class="project-card reveal">
        <div class="pc-top">
          <div>
            <div class="pc-title">${esc(p.title)}</div>
            ${p.subtitle ? `<div class="pc-subtitle">${esc(p.subtitle)}</div>` : ""}
          </div>
          ${p.status ? `<span class="pc-status">${esc(p.status)}</span>` : ""}
        </div>
        <p class="pc-desc">${esc(p.description)}</p>
        <div class="pc-tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        ${p.link
          ? `<a class="pc-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || "Visit")} ${externalLinkIcon}</a>`
          : `<span class="pc-link disabled">${esc(p.linkLabel || "Link coming soon")}</span>`}
      </div>
    `).join("");
  }

  function renderPublications() {
    $("#pubList").innerHTML = R.publications.map((pub) => `
      <div class="pub-item reveal">
        <div>
          <div class="pub-title">${esc(pub.title)}</div>
          <div class="pub-meta">${esc(pub.role)} · ${esc(pub.venue)}</div>
        </div>
        <span class="pub-status">${esc(pub.status)}</span>
      </div>
    `).join("");
  }

  function renderSkills() {
    $("#skillsGrid").innerHTML = R.skills.map((group) => `
      <div class="skill-group reveal">
        <h4>${esc(group.group)}</h4>
        <div class="skill-tags">${group.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div>
      </div>
    `).join("");
  }

  function renderContact() {
    const items = [
      { label: R.email, href: `mailto:${R.email}`, icon: `<path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>` },
      { label: "LinkedIn", href: R.links.linkedin, icon: `<rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9h4v2a4 4 0 0 1 8 0v9h-4v-8a2 2 0 0 0-4 0v8h-4z"/>` },
      { label: "GitHub", href: R.links.github, icon: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>` },
    ].filter((i) => i.href);
    $("#contactLinks").innerHTML = items.map((i) => `
      <a href="${esc(i.href)}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i.icon}</svg>
        ${esc(i.label)}
      </a>
    `).join("");
  }

  /* ---------------- typewriter ---------------- */
  function initTypewriter() {
    const target = $("#typeTarget");
    const words = R.role && R.role.length ? R.role : ["software"];
    let wordIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        target.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          return setTimeout(tick, 1500);
        }
      } else {
        charIdx--;
        target.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? 45 : 85);
    }
    tick();
  }

  /* ---------------- scroll reveal ---------------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, groupIdx) => {
        if (entry.isIntersecting) {
          entry.target.style.setProperty("--i", groupIdx);
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------------- nav: scroll spy, blur, mobile menu ---------------- */
  function initNav() {
    const nav = $("#nav");
    const navLinks = $$("[data-nav]");
    const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href")));
    const hamburger = $("#hamburger");
    const navLinksWrap = $("#navLinks");

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
      $("#progressBar").style.width =
        `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
      $("#toTop").classList.toggle("visible", window.scrollY > 600);

      let current = sections[0];
      for (const sec of sections) {
        if (sec && window.scrollY >= sec.offsetTop - 140) current = sec;
      }
      navLinks.forEach((a) => a.classList.toggle("active", document.querySelector(a.getAttribute("href")) === current));
    }, { passive: true });

    hamburger.addEventListener("click", () => {
      const open = navLinksWrap.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
    navLinks.forEach((a) => a.addEventListener("click", () => {
      navLinksWrap.classList.remove("open");
      hamburger.classList.remove("open");
    }));

    $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- particle canvas ---------------- */
  function initParticles() {
    const canvas = $("#particles");
    const ctx = canvas.getContext("2d");
    let w, h, particles;
    const COUNT = window.innerWidth < 700 ? 34 : 70;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    function makeParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }
    function accent() {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#7c9dff";
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const color = accent();
      ctx.fillStyle = color;
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = color;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }

    resize();
    makeParticles();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(frame);
    }
    window.addEventListener("resize", () => { resize(); makeParticles(); });
  }

  /* ---------------- init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderPublications();
    renderSkills();
    renderContact();
    initTypewriter();
    initNav();
    initParticles();
    initReveal();
  });
})();
