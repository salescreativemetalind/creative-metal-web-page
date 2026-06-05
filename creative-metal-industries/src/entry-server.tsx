// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          {assets}
        </head>
        <body>
          <a href="#main-content" class="skip-link" style="position:absolute;left:-9999px;top:1rem;background:var(--orange);color:white;padding:0.5rem 1rem;border-radius:4px;z-index:9999;font-weight:600">
            Skip to main content
          </a>
          <div id="app">{children}</div>
          {scripts}
          <script>{`
            (function(){
              var btn=document.getElementById('hamburger-btn');
              var menu=document.getElementById('mobile-nav');
              var close=document.getElementById('mobile-close-btn');
              if(btn&&menu&&close){
                btn.onclick=function(){menu.classList.add('open');};
                close.onclick=function(){menu.classList.remove('open');};
              }
              var nav=document.getElementById('site-nav');
              if(nav){
                window.addEventListener('scroll',function(){
                  nav.classList.toggle('scrolled',window.scrollY>50);
                  nav.classList.toggle('nav-transparent',window.scrollY<=50);
                },{passive:true});
              }
            })();
          `}</script>
        </body>
      </html>
    )}
  />
));
