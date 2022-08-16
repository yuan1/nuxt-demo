<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ pdfNumPages }}</p>
    <client-only placeholder="Loading...">
      <VuePdf
        v-for="i in pdfNumPages"
        :key="i"
        :src="pdfUrl"
        :page="i"
      ></VuePdf>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      name: '111',
      pdfNumPages: 1,
      pdfUrl: '',
    }
  },
  mounted() {
    console.log(this.$config)
    this.loadPdf(
      'https://xunbiao-static.nengapp.com/2022-08-15/%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%8A%9B%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E5%85%AC%E5%8F%B8/14040b03bd24476e94c8ec07fca993c8.pdf'
    )
  },
  methods: {
    loadPdf(pdfUrl) {
      this.pdfUrl = pdfUrl
      this.$pdf.createLoadingTask(pdfUrl).promise.then((pdf) => {
        console.log(pdf)
        this.pdfNumPages = pdf.numPages
      })
    },
  },
}
</script>
