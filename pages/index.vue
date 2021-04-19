<template>
  <!-- Intro -->
  <div id="main">
    <div id="faq" class="w3-row-padding w3-padding-32 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <h1>{{ $t('section-intro.header') }}</h1>
          <h5 class="w3-padding-32" style="padding-left: 0px !important">
            {{ $t('section-intro.body') }}
          </h5>
        </div>

        <div id="icons" class="w3-third w3-center">
          <i class="fa w3-text-red">
            <img
              style="width: 100%; object-fit: contain"
              src="/graphics/singlepayer-cam4asite.png"
              alt=""
            />
          </i>
        </div>
      </div>
    </div>

    <!-- AB1400 -->
    <div class="w3-row-padding w3-light-grey w3-padding-32 w3-container">
      <div class="w3-content">
        <div id="icons" class="w3-third w3-center">
          <i class="fa w3-text-red w3-margin-right">
            <img
              style="width: 100%; object-fit: contain"
              src="/graphics/dsa-cam4asite.png"
              alt=""
            />
          </i>
        </div>

        <div class="w3-twothird">
          <h1>{{ $t('section-ab1400.header') }}</h1>
          <h5 class="w3-padding-32" style="padding-left: 0px !important">
            {{ $t('section-ab1400.body') }}
          </h5>
        </div>
      </div>
    </div>

    <!-- DSA -->
    <div class="w3-row-padding w3-padding-32 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <h1>{{ $t('section-dsa.header') }}</h1>
          <h5 class="w3-padding-32" style="padding-left: 0px !important">
            {{ $t('section-dsa.body') }}
          </h5>
        </div>

        <div id="icons" class="w3-third w3-center">
          <i class="fa w3-text-red">
            <img
              style="width: 100%; object-fit: contain"
              src="/graphics/dsaLogo.png"
              alt=""
            />
          </i>
        </div>
      </div>
    </div>

    <!-- Get Involved -->
    <div
      id="volunteer"
      class="w3-row-padding w3-light-grey w3-padding-32 w3-container"
    >
      <div class="w3-content">
        <div id="icons" class="w3-third w3-center">
          <i class="fa w3-text-red w3-margin-right">
            <img
              style="width: 100%; object-fit: contain"
              src="/graphics/clipboard.png"
              alt=""
            />
          </i>
        </div>

        <div class="w3-twothird">
          <h1>Get Involved</h1>
          <h5 class="w3-padding-32" style="padding-left: 0px !important">
            Ready to join the fight for CalCare? Get plugged into our campaign
            here!
          </h5>

          <div class="w3-col">
            <div class="w3-half">
              <a
                href="https://actionnetwork.org/forms/join-our-statewide-campaign-to-win-single-payer-in-california/"
                target="_blank"
                class="get-involved-button volunteer"
              >
                {{ $t('volunteer') }}
              </a>
            </div>
            <div class="w3-half">
              <a
                href="https://secure.actblue.com/donate/cam4a"
                target="_blank"
                class="get-involved-button donate"
              >
                {{ $t('donate') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-container w3-center">
      <img
        style="width: 100%; object-fit: contain"
        src="/graphics/footer-cam4asite.png"
        alt="California Medicare for All"
      />
    </div>
  </div>
</template>

<style>
.get-involved-button {
  width: 230px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-size: contain;

  color: #fff;
  text-decoration: none;
  font-size: 34px;
  line-height: 2.1em;
  font-family: 'Libre Franklin Black', sans-serif;
  text-align: center;
}
:lang('es-ES') .get-involved-button {
  font-size: 21px;
  line-height: 3.4em;
}
.volunteer {
  background-image: url('/graphics/textured-button1.png');
}
.donate {
  background-image: url('/graphics/textured-button2.png');
}
.get-involved-button::before {
  content: '';
  width: 1px;
  margin-left: -1px;
  float: left;
  height: 0;
  padding-top: 31.5%;
}
.get-involved-button::after {
  content: '';
  display: table;
  clear: both;
}
#icons {
  display: block;
}
@media screen and (max-width: 768px) {
  #icons {
    display: none;
  }
  .w3-twothird {
    width: 100%;
  }
}
</style>

<i18n lang="yaml">
en:
  section-intro:
    header: It's time for single-payer in California.
    body: |
      The US healthcare system is designed to maximize profit, not patient
      care. Millions of working-class Americans have lost their health
      insurance during the COVID-19 pandemic; meanwhile, Californias 165
      billionaires have seen their wealth increase by $175,000,000,000 since
      March. In the richest state in the richest country in the world, this
      is unacceptable. We can and we must pass Medicare for All—and that
      starts here in California.
  section-ab1400:
    header: What is AB1400?
    body: |
      Assembly Bill 1400 (AB1400) would create the California Guaranteed
      Health Care for All program, or CalCare, to provide comprehensive
      universal single-payer health care coverage for the benefit of all
      residents of the state. Authored by State Assembly member Ash Kalra,
      AB1400 would expand coverage to nearly 3 million uninsired Californians
      and provide rich benefits, including dental care, generous prescription
      drug coverage and long-term care.
  section-dsa:
    header: Who are the Democratic Socialists of America?
    body: |
      The Democratic Socialists of America is the largest socialist
      organization in the United States, with over 92,000 members and
      chapters in all 50 states. We believe that working people should run
      both the economy and society democratically to meet human needs, not to
      make profits for a few. We are a political and activist organization,
      not a party; through campus and community-based chapters, DSA members
      use a variety of tactics, from legislative to direct action, to fight
      for reforms that empower working people.
  get-involved: Get Involved
  ready-to-join: Ready to join the fight for CalCare? Get plugged into our campaign here!
es:
  section-intro:
    header: Es hora para un sistema de Medicare para Todos en California.
    body: |
      El sistema de salud de los Estados Unidos está diseñado para maximizar
      las ganancias de las empresas de aseguranza, no la atención al
      paciente. Millones de estadounidenses de clase trabajadora han perdido
      su seguro médico durante la pandemia de COVID-19; mientras tanto, los
      165 multimillonarios de California han visto aumentar su riqueza en
      $175,000,000,000 desde marzo de 2020. En el estado más rico del país,
      más rico del mundo, esto es inaceptable. Podemos y debemos aprobar
      Medicare para Todos, y eso comienza aquí en California.
  section-ab1400:
    header: ¿Qué es AB 1400?
    body: |
      El proyecto de ley de la asamblea número 1400 (AB 1400) crearía el
      programa Tratamiento Médico Garantizado para Todos en California, o
      CalCare, o Medicare para Todos, para brindar una aseguranza integral de
      atención médica universal de pagador único (o sea, sin aseguranza
      privada) a beneficio de todos los residentes del estado. Escrito por el
      miembro de la Asamblea Estatal Ash Kalra, AB 1400 ampliaría la
      aseguranza a casi 3 millones de californianos no asegurados y brindaría
      importantes beneficios nuevos, que incluyen atención dental, generosa
      cobertura de recetas médicas y cuidado a largo plazo.
  section-dsa:
    header: ¿Quiénes son los socialistas democráticos de América?
    body: |
      Los Socialistas Democráticos de América (DAS) es la organización
      socialista más grande de los Estados Unidos, con más de 92.000 miembros
      y capítulos en los 50 estados. Creemos que los trabajadores deben
      administrar la economía y la sociedad de manera democrática para
      satisfacer las necesidades humanas, no para obtener ganancias para unos
      pocos. Somos una organización política y activista, no un partido. A
      través de capítulos basados en los colegios y la comunidad, los
      miembros de la DSA utilizan una variedad de tácticas, desde la acción
      legislativa hasta la acción directa, para luchar por reformas que den
      poder a los trabajadores.
  get-involved: Involucrarse
  ready-to-join: ¿Listo para unirse a la lucha por CalCare? ¡Conéctese a nuestra campaña aquí!
</i18n>
