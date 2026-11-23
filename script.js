const DATA = {
  first: "Adrian B.", last: "Decin",
  roles: ["<span>RPA</span> Developer", "<span>AI and Agentic</span> Engineer"],
  tagline: "I build automations that go live, then trace every recurring exception until it stops recurring.",
  location: "Santa Maria, Bulacan",
  email: "narodecin@gmail.com",
  phone: "",
  photo: "images/photo.jpg",
  links: [{label:"LinkedIn", url:"https://www.linkedin.com/in/adrian-decin"}, {label:"GitHub", url:"https://github.com/drndcndev"}], resume:"Resume_aDecin.pdf", avail:"Open to RPA Developer and AI and Agentic Engineer opportunities.", // LinkedIn and GitHub URLs: confirm they are final
  log: [["init","config loaded"],["get","next item: profile"],["run","UiPath, SAP, Excel, web"],["end","status: successful"]],
  facts: [
    ["Certified", "UiPath Advanced RPA Developer, IBM RPA, and Microsoft Power Automate."],
    ["In production", "End-to-end UiPath workflows joining SAP, Excel and web systems at Actimai Philippines, since July 2025."],
    ["Also shipped", "The back-end of the National Police Commission’s case management system (NAPOLCOM, 2025)."]
  ],
  profile: "&quot;I’m an RPA Developer and AI &amp; Agentic Engineer at Actimai Philippines. I build workflows that take repetitive work off people’s plates and stay with them until they run reliably in production. I’m <em>more interested in why a bot broke than in restarting it</em>, so I trace recurring failures to the root cause and keep business and technical teams aligned. Before this I built a government case management back-end, and I’m now exploring where AI fits into automation.&quot;",
  jobs: [
    { id:"item 1", when:"Jul 2025 to present", status:"running", live:true,
      role:"RPA Developer", org:"Actimai Philippines Inc.",
      pts:[
        "Designed, built and deployed end-to-end UiPath workflows in production, integrating SAP, Microsoft Excel and web-based systems for rule-based decisioning, exception handling and scheduled orchestration.",
        "Restructured project workflows so bots run more accurately and efficiently, and added features to existing automations.",
        "Works with business analysts and process owners through UAT, hypercare and post-production support, checking workflow behavior against requirements for smooth go-lives.",
        "Turns process requirements into solution architecture and technical design documents, with effort estimates and feasibility assessments.",
        "Monitors production bots, assesses failures and runs root-cause analysis on recurring exceptions to bring down repeat incidents."
      ]},
    { id:"item 2", when:"2025", status:"closed", live:false,
      role:"Intern Developer", org:"NAPOLCOM, National Police Commission",
      pts:["Designed and built the back-end of a case management system covering case logging, evaluation, access control, and reporting for users and cases."]},
    { id:"item 3", when:"2025", status:"closed", live:false,
      role:"Intern Developer", org:"Actimai Philippines Inc.",
      pts:[
        "Built an Elasticsearch and Kibana dashboard that visualizes metrics, logs and graphs for business clients.",
        "Trained and fine-tuned AI models for integration into internal web applications.",
        "Completed UiPath RPA training, building the foundation in workflow design.",
        "Diagnosed and resolved hardware faults, handled data encoding and equipment maintenance to keep operations running."
      ]}
  ],
  cases: [
    { title:"Process automation workflows",
      scope:"Rule-based processes that move data between enterprise systems, spreadsheets and web applications.",
      approach:"Structured state-machine workflows with configuration files, transaction queues, exception handling and automatic retries.",
      tools:["UiPath","SAP","Excel","CSharp","VB.NET"], flow:["Initialize","Get transaction","Process","Set status","End"],
      img:"images/uipath-workflow.png", note:"Sample UiPath REFramework project", study:"", flowUrl:"", gh:"" },
    { title:"NAPOLCOM case management back-end",
      scope:"Back-end for a case management system: logging cases, evaluating them and reporting, with access based on user role.",
      approach:"Designed the data and access layers so each role sees and edits only what it should, with reports built from the case records.",
      tools:["Python","Firebase","JavaScript","ReactJS"], flow:["Log case","Evaluate","Access control","Reports"],
      img:"images/backend-sample.png", note:"Illustrative back-end sample", study:"", flowUrl:"", gh:"" }
  ],
  // A trailing * marks a skill backed by a certificate
  skillGroups: [
    ["RPA platforms", ["UiPath*","IBM RPA*","Microsoft Power Automate*","GoRule"]],
    ["Development", ["Python","JavaScript","C#","C++","Java","VB.NET","Kotlin","React.js","React Native","Node.js","Express.js","HTML","CSS"]],
    ["Data and AI", ["MySQL","PostgreSQL","Firebase","Supabase","Elasticsearch","Kibana","Prompt engineering*","AI model fine-tuning"]]
  ],
  also: ["Figma","Canva","Blender","Arduino IDE"],
  // [name, credential URL]; the first 4 show up front, the rest expand
  certs: [
    ["RPA Developer Advance",""], ["Automation Developer Professional Training",""], ["IBM RPA Intermediate 1 and 2",""], ["Microsoft Power Automate",""],
    ["Prompt Engineering for Everyone (IBM)",""], ["Prompt Engineering for Everyone (Cognitive AI)",""], ["Claude Code 101",""],
    ["CCNA: Introduction to Networks (Cisco)",""], ["Fundamentals of Predictive Project Management",""],
    ["7th Regional Assembly on IT Education: AI-Driven Future: Education, Ethics and Innovation",""]
  ],
  edu: [
    { when:"June 2025", deg:"BS Information Technologies", school:"Dr. Yanga’s Colleges, Inc." },
    { when:"March 2020", deg:"Science, Technology, Engineering, and Mathematics", school:"Angel John Integrated Academy, Inc." }
  ],
  ask: "Have a process worth automating?",
  refs: [] // [{quote:"", name:"", role:""}]; the section appears once you add one
};

/* ---------- Render ---------- */
document.documentElement.classList.add("js");
try { if (localStorage.getItem("seen")) document.documentElement.classList.add("rv"); else localStorage.setItem("seen", "1"); } catch (e) {}
const D = DATA, li = a => a.map(x => `<li>${x}</li>`).join("");
const link = l => l.url ? `<a href="${l.url}">${l.url}</a>` : `<span class="ph">add URL</span>`;

const pageTitle = "Adrian B. Decin — RPA Developer and AI and Agentic Engineer";
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.title = pageTitle;
} else {
  const loop = pageTitle + "   •   ";
  const stepMs = 150;
  const pauseMs = 5000;
  let i = 0;
  const tick = () => {
        document.title = (loop + loop).slice(i, i + loop.length);
    i = (i + 1) % loop.length;
    setTimeout(tick, i === 0 ? pauseMs : stepMs);
  };
  tick();
}

const ph = s => s[0] === "[" ? `<span class="ph">${s.slice(1,-1)}</span>` : s;
const btn = (u, t, c = "") => u ? `<a class="btn ${c}" href="${u}">${t}</a>` : "";
const caseCard = c => `<article class="case" data-r>
  <div><figure class="shot">${c.img ? `<img src="${c.img}" alt="${c.note}" loading="lazy">` : "preview<br>set img"}</figure>
  <p class="mono cap">${c.note}</p>
  <ol class="flow" aria-label="Workflow">${c.flow.map((s,i)=>`<li style="--k:${i};--n:${c.flow.length}">${s}</li>`).join("")}</ol></div>
  <div><h3>${c.title}</h3>
  <dl>${[["Scope",c.scope],["Approach",c.approach],["Stack",`<ul class="chips">${c.tools.map(t=>`<li>${t}</li>`).join("")}</ul>`]].map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("")}</dl>
  <div class="acts">${btn(c.study,"Case study","solid")}${btn(c.flowUrl,"View workflow")}${btn(c.gh,"GitHub")}</div></div>
</article>`;
const skillGroup = g => { const n = g[1].filter(s => s.endsWith("*")).length;
  return `<div class="sg" data-r><h3>${g[0]}</h3><p class="mono">${n ? `${n} of ${g[1].length} with certificates` : `${g[1].length} skills`}</p><ul>${g[1].map(s=>`<li${s.endsWith("*") ? ' class="c"' : ""}>${s.replace("*","")}</li>`).join("")}</ul></div>`; };
const cert = (c, front) => `<li${front ? ' data-r class="maj"' : ""}><span>${c[0]}</span>${c[1] ? `<a class="cv" href="${c[1]}">View credential</a>` : ""}</li>`;

document.getElementById("main").innerHTML = `
<section id="init" class="hero" aria-label="Introduction">
  <div class="top"><span>Run sheet: ${D.first} ${D.last}</span><span>${D.location}</span></div>
  <ul class="log" aria-hidden="true">${D.log.map((l,i)=>`<li style="--s:${(.2+i*.3).toFixed(2)}s"><b>${l[0]}</b>${l[1]}</li>`).join("")}</ul>
  <h1><span class="kick seq" style="--s:.9s">${D.first}</span><span class="mask"><span>${D.last}</span></span></h1>
  <p class="roles seq" style="--s:1.5s">${D.roles.join("<br>")}</p>
  <p class="tag seq" style="--s:1.65s">${D.tagline}</p>
  <div class="cta seq" style="--s:1.72s"><span class="avail">${D.avail}</span><a class="btn solid" href="${D.resume}" download>Download resume</a></div>
  <figure class="wf seq" style="--s:1.9s"><picture><source media="(min-width:1700px) and (prefers-color-scheme:dark)" srcset="images/workflow-live-dark.svg"><source media="(min-width:1700px)" srcset="images/workflow-live-light.svg"><source media="(prefers-color-scheme:dark)" srcset="images/workflow-wide-dark.svg"><img src="images/workflow-wide-light.svg" width="480" height="300" alt="Animated state machine: Initialize, Get transaction, Process, Set status, End, with an exception at Process looping back for a retry."></picture></figure>
  <div class="facts">${D.facts.map((f,i)=>`<div class="fact seq" style="--s:${(1.8+i*.14).toFixed(2)}s"><h4>${f[0]}</h4><p>${f[1]}</p></div>`).join("")}</div>
  <div class="prof">
    <figure class="photo" data-r>${D.photo ? `<img src="${D.photo}" alt="Portrait of ${D.first} ${D.last}">` : "Photo placeholder<br>set DATA.photo"}</figure>
    <p class="lede" data-r>${D.profile}</p>
  </div>
</section>

<section id="transactions" class="sec" aria-labelledby="h-tx">
  <p class="lbl">01 / get next item</p>
  <h2 class="big" id="h-tx">Transactions</h2>
  ${D.jobs.map(j=>`<article class="tx" data-r>
    <div class="txm"><span>${j.id}</span><span>${j.when}</span><em class="chip ${j.live?"live":""}">${j.status}</em></div>
    <div><h3>${j.role}</h3><p class="org">${j.org}</p><ul>${li(j.pts)}</ul></div>
  </article>`).join("")}
  <h2 class="big sub" id="h-work">Selected work</h2>
  <p class="intro">Representative examples of the kind of work I do. Client names, data and results are not shown.</p>
  <div class="cases">${D.cases.map(caseCard).join("")}</div>
</section>

<section id="process" class="sec" aria-labelledby="h-sk">
  <p class="lbl">02 / process item</p>
  <h2 class="big" id="h-sk">Skills index</h2>
  <div class="skg">${D.skillGroups.map(skillGroup).join("")}</div>
  <p class="mono key"><span style="color:var(--signal)">&#9632;</span> certificate held. Also: ${D.also.join(", ")}.</p>
  <h2 class="big sub">Credentials</h2>
  <div class="cred">
    <div><ol class="certs">${D.certs.slice(0,4).map(c=>cert(c,1)).join("")}</ol>
    <details class="more" data-r><summary>Show ${D.certs.length-4} more</summary><ol class="certs">${D.certs.slice(4).map(c=>cert(c)).join("")}</ol></details></div>
    <div class="edu">${D.edu.map(e=>`<article data-r><p class="mono">${e.when}</p><h3>${e.deg}</h3><p>${e.school}</p></article>`).join("")}</div>
  </div>
</section>

${D.refs.length ? `<section class="sec" aria-labelledby="h-rf"><h2 class="big" id="h-rf">References</h2><div class="refs">${D.refs.map(r=>`<blockquote data-r>&ldquo;${r.quote}&rdquo;<cite>${r.name}, ${r.role}</cite></blockquote>`).join("")}</div></section>` : ""}
<section id="end" class="end" aria-label="Contact">
  <p class="lbl">03 / end process</p>
  <h2 class="ask">${D.ask}</h2>
  <a class="mail" href="mailto:${D.email}">${D.email}</a>
  <ul class="links">
    <li><span>Location</span>${D.location}</li>
    ${D.phone ? `<li><span>Phone</span><a href="tel:${D.phone}">${D.phone}</a></li>` : ""}
    <li><span>Resume PDF</span><a href="${D.resume}" download>${D.resume}</a></li>
    ${D.links.map(l=>`<li><span>${l.label}</span>${link(l)}</li>`).join("")}
  </ul>
  <a class="up" href="#init">Back to top</a>
  <p class="foot">End of run. &copy; 2026 ${D.first} ${D.last}</p>
</section>`;

/* ---------- Scroll reveals, staggered by position in parent ---------- */
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll("[data-r]").forEach(el => {
  el.style.setProperty("--d", (Array.prototype.indexOf.call(el.parentNode.children, el) % 6) * 70 + "ms");
  rv.observe(el);
});

/* ---------- Rail: token follows the section crossing mid-viewport ---------- */
const ids = ["init","transactions","process","end"], items = document.querySelectorAll(".rail li");
const setState = n => {
  document.documentElement.style.setProperty("--i", n);
  items.forEach((it, k) => {
    it.classList.toggle("done", k < n);
    it.firstElementChild.setAttribute("aria-current", k === n ? "true" : "false");
  });
};
setState(0);
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) setState(ids.indexOf(e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
ids.forEach(id => so.observe(document.getElementById(id)));

/* ---------- Page: cursor-following glow (fine pointers, motion allowed) ---------- */
if (matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches) {
  addEventListener("pointermove", e => {
    document.documentElement.style.setProperty("--mx", e.clientX + "px");
    document.documentElement.style.setProperty("--my", e.clientY + "px");
  });
}