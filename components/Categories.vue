<template>
  <div class="categories">
    <div class="title">
      <div class="divider"></div>
        <strong>Featured categories</strong>
      <div class="divider"></div>
    </div>
    <div class="category-list">
      <CategoryCard v-for="category in categories" :category="category" :key="categories.indexOf(category)"/>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          image: 'https://s3-alpha-sig.figma.com/img/cd5d/e1b2/91cba394a01bee55f8ae905df00c8d54?Expires=1655683200&Signature=geJ8ZTr~LRZ6p5niRohpHXPD7sIiUoLW-bp2iIOfQ1M6F5geQ1hx25us8le7sxahZZ8L6y2Tbfxbh5cnk8ZOb3CVumKWZH9-TS3Um5OtggrSB4Oie06cRm4Mk4mItP4suQqWayemGp-8KSWH9r~hgYoE50oWAlf-VQJlcDHwqyiOH1CZnPcKFT58JkQYWrn1klE3cLkLmQc8XwNpVELSGN6ji6lRlKeMgI48YDilDaRVOrXpTfj4FKGnHFdBdRpa7JhZXEftnydG7PXyg0U0PAmF~bVC4-HHfgSYkqekGlxInlTb-3mybqixIONNxMy9rDXrOKFeHodlsEMiJYpWzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          title: 'Personal Care',
          text: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/8816/a143/a852c40c82ea4263a159a85218b332cb?Expires=1655683200&Signature=fWpzK1MaQITaUPAEZFqpyAE1t5ROsrxvh84~nuycmTIYVLiZM2JXKMmFlyYQEvB~9mduU-RMWjsJKXPO68SRlPRP~ybMiENPL0iFVt74HIlyA5CKWUKIecjcdFh1cq~rMCA4kC7sjP0enyRAQlaACjzoDTOJs5ffkTjWXB8kk805UyrOjD3-oLE7SKtMBYmtu5fKqnP25KWlBhpUyplzKNu5uyp6TmGTy5UZ3-Figc6NVdGvPi8mJb6da6BqYEqyQ3F0SeqBAGV2n32xZRh7SATOSVfDCIT5WyMTm1~lY0V0xQ~NV9TytM2e3tDzCXTyACEoyrUf1EAIhqDWjeNn-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          title: 'Skin Care',
          text: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/cd72/4a5d/98a3ac8461d34ab331876698474e1607?Expires=1655683200&Signature=d-2swE54o5nJ-DMfec2j3obCV2xvmuQnfmGflwrTCAB0ltUf1otqwnJmhfR9-5zIY3qAFFXyP2CwKDrPA5KakHZTb9yFnV7X9EHWRrE-3oOsXPMPidFXFO6vd8Yp8T43Oum~fmKz~mZfPDdVpTrMt1YpHfF~cEt6DJ8Eh9A6OenfO2LxM1e8vMVvgJkWpUFAHyc9fAeO5Tu81gn6RV~Nk77SYBAYZVJ78raFKMUJclmwJt1ty0wMAH6yGf-GZQ9LsUZ9F2y6yXVV7OxXbJnWFivC6eHZN~i7igIwdfgvyEMlG~iVkXpfVeHrJy78Eqhlp9hs-9cczoOnXiW8ueGwmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          title: 'Make - Up',
          text: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
        },
        {
          image: 'https://s3-alpha-sig.figma.com/img/5e3e/43a4/d756da51fcd47aaf463280ecc7654f0a?Expires=1655683200&Signature=E0iZNEgb2eBhWj2QzeIxuBgf0R81v8xLly2sREzCARsjw12P94aHEPI~W853vlfye2SCBIjMUiuSGX3fOYkTEPbgx6xdIU9lnHOmCvyOM1Q3hby6EUqlN75bH3aLdytXujj~yp7MynJX3L7Zi4-1G7wjmuENeu~xCM7O7lftLLKJO95bLWjHt-Bc1pkd3Bj9Zz0r59li7dzMNcUxVdKoBSFzCpc-jR0PlzWoK9eErxNTTQCRhpmDO177pmUE02CTKkl-0g8rXW4S5I8i75NQZUQRBR6Q0n9z2tNJxeExQ8V3ikJdnA2u1iLF8c5KOpAh3AuoRgtbrKP2y93R310Djw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          title: 'Mother & Baby',
          text: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
        },
      ]
    }
  }
}
</script>
