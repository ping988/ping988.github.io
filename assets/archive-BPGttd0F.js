import"./archive-gallery-417KMnsT.js";/* empty css               */var e=(e,t)=>Array.from({length:t-e+1},(t,n)=>e+n),t=[{id:`archive-marketing`,title:`日常营销与新媒体视觉`,label:`CAMPAIGN & SOCIAL`,pages:e(22,25)},{id:`archive-fresh`,title:`淘菜菜领鲜系列`,label:`BRAND IP & PACKAGING`,pages:e(26,32)},{id:`archive-system`,title:`营销视觉规范`,label:`DESIGN SYSTEM`,pages:e(60,63)}],n=[{id:`archive-campaigns`,title:`电商营销项目`,label:`CAMPAIGN DESIGN`,pages:e(5,21)},t[0],t[1],{id:`archive-interaction`,title:`互动产品设计`,label:`INTERACTIVE EXPERIENCE`,pages:e(33,41)},{id:`archive-practice`,title:`设计管理与提效实践`,label:`DESIGN PRACTICE`,pages:e(42,59)},t[2],{id:`archive-more-visuals`,title:`视觉延展与更多作品`,label:`VISUAL EXPLORATION`,pages:e(64,77)}],r=e=>`/assets/archive-2025/page-${String(e).padStart(2,`0`)}.jpg`,i=e=>`${e.pages[0]}–${e.pages.at(-1)}`;function a(e){return e.map((e,t)=>`
    <section class="archive-project" id="${e.id}" aria-labelledby="${e.id}-title">
      <header class="archive-project-heading">
        <span class="archive-project-number">${String(t+1).padStart(2,`0`)}</span>
        <div><p>${e.label}</p><h3 id="${e.id}-title">${e.title}</h3></div>
        <span class="archive-project-pages">原作品集 P.${i(e)}</span>
      </header>
      <div class="archive-pages">
        ${e.pages.map(t=>`
          <figure class="archive-page" id="archive-page-${t}">
            <a href="${r(t)}" target="_blank" rel="noopener" aria-label="${e.title}，第${t}页，打开大图（新窗口）">
              <img src="${r(t)}" alt="${e.title} · 原作品集第${t}页" width="2000" height="1125" loading="lazy" decoding="async" />
            </a>
          </figure>`).join(``)}
      </div>
    </section>`).join(``)}function o(e){let r=e===`featured`?t:n,o=document.querySelector(`[data-archive-gallery="${e}"]`),s=document.querySelector(`[data-archive-index="${e}"]`);o&&(o.innerHTML=a(r)),s&&(s.innerHTML=r.map((e,t)=>`
    <a href="#${e.id}"><span>${String(t+1).padStart(2,`0`)}</span><strong>${e.title}</strong><small>P.${i(e)} <span aria-hidden="true">↓</span></small></a>`).join(``))}o(`more`);