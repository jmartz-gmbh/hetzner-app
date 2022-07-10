<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <!-- Homepage - Hetzner.app -->
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-8008841377413395"
          data-ad-slot="2136626795"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2 class="text-lg font-bold text-center mt-5">Willkommen</h2>
        <p class="text-center">
          auf meiner neuen Webseite für die <br />Steuerung der Hetzner Cloud
          per Webapp. <br /><br />
          Bei Fragen oder Feedback gerne mir <br />
          eine
          <a
            href="mailto:feedback@jmartz.de"
            class="text-blue-400"
            target="_blank"
            >Mail</a
          >
          oder per Github
          <a
            href="https://github.com/jmartz-gmbh/hetzner-app/issues"
            class="text-blue-400"
            target="_blank"
            >Issue</a
          >.
        </p>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="grid grid-cols-4">
          <div class="col-span-4 md:col-span-2 text-center mt-12">
            <fa icon="server" class="fa-3x" />
            <p class="mt-5">
              <router-link to="/servers" class="text-blue-400"
                >Cloud Server</router-link
              >
            </p>
          </div>
          <div class="col-span-4 md:col-span-2 text-center mt-12">
            <fa icon="robot" class="fa-3x" />
            <p class="mt-5">
              <router-link to="/robot" class="text-blue-400"
                >DNS Robot</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
