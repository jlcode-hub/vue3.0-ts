<template>
  <div>你好 {{ userStore.name }} 我是Index</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { User as UserStore } from '@/store/modules/user';

@Options({})
export default class Index extends Vue {
  private userStore = UserStore;

  async created() {
    await UserStore.fetchUserInfo();
  }
}
</script>

<style scoped></style>
