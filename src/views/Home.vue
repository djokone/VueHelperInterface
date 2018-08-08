<template>
  <div class="home">
    <HelperForm
      ref="exemple"
      :datas="form.datas"
      :inputs="form.inputs"
    >
    </HelperForm>
    {{localData}}
  </div>
</template>

<script>
  // @ is an alias to /src
  const datas = {
    nom: 'Doe',
    prenom: 'John'
  }
  export default {
    name: 'home',
    data () {
      return {
        localData: {},
        form: {
          datas,
          inputs: [
            {
              class: 'col1',
              name: 'persone',
              type: 'group',
              inputs: [
                {
                  name: 'nom',
                  label: 'Votre prénom'
                },
                {
                  name: 'prenom',
                  label: 'Votre prénom'
                },
                {
                  type: 'btn',
                  behavior: 'add',
                  label: 'Votre prénom'
                }
              ]
            },
            {
              name: 'adresse',
              btn: ['Add'],
              forms: [
                {
                  name: 'rue'
                },
                {
                  name: 'ville'
                }
              ]
            }
          ]
        }
      }
    },
    mounted () {
      this.localData = this.$refs.exemple.localData
    },
    computed: {
    }
  }
</script>
