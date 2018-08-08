<template>
  <div>
    <h2>Champs text :</h2>
    <HelperInput
      :name="'test'"
      :label="'coucou'"
    />
  </div>
</template>

<script>
  export default {
    name: 'input-exemple',
    ready () {
      console.log('coucou')
    }
  }
</script>
