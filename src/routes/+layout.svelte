<script lang="ts">
  import { FirebaseApp } from 'sveltefire';
  import { auth, firestore } from '$lib/firebase';
</script>

<FirebaseApp {auth} {firestore}>
  <slot />
</FirebaseApp>
