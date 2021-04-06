<template>
  <div id="get-involved">
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
            />
          </i>
        </div>

        <div class="w3-twothird">
          <h1>Get Involved</h1>
          <h5 class="w3-padding-32" style="padding-left: 0px !important">
            Ready to join the fight for CalCare? Get plugged into our campaign
            here!
          </h5>

          <div class="w3-cell get-involved-button">
            <a href="https://secure.actblue.com/donate/cam4a" target="_blank">
              <img src="/graphics/b-donate.png" />
            </a>
          </div>

          <div id="volunteer-form" style="width: undefined">
            <!-- Volunteer form is injected here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://actionnetwork.org/widgets/v2/form/join-our-statewide-campaign-to-win-single-payer-in-california?format=js&source=widget&can_widget_id=volunteer-form',
          body: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://actionnetwork.org/css/style-embed-whitelabel.css',
        },
      ],
    }
  },
}
</script>

<style>
.get-involved-button img {
  width: 40%;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#can_embed_form h2,
#can_embed_form h4,
#can_embed_form #action_info {
  display: none;
}

#can_embed_form.can_float #form_col1,
#can_embed_form.can_float #form_col2 {
  float: none;
  width: auto;
}
</style>
