<script>
  import MediaQuery from './MediaQuery.svelte';
  
  // import AppMobile from './lib/AppMobile.svelte';
  import AppDesktop from './lib/desktop/AppDesktop.svelte';

</script>

<main>
  <MediaQuery query="(min-width: 500px)" let:matches>
    {#if matches}
          <AppDesktop />    
          
    {/if}
  </MediaQuery>
  
  <MediaQuery query="(max-width: 500px)" let:matches>
    {#if matches}
          <!-- <AppMobile width={370} height={1100}/> -->
    {/if}
  </MediaQuery>         

</main>

