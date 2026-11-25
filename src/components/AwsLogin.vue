<script setup lang="ts">
import { ref } from 'vue';
import { signInAws } from '@/services/awsSession';

const region = ref('ap-southeast-2');
const accessKeyId = ref('');
const secretAccessKey = ref('');
const error = ref('');
const loading = ref(false);

async function submit() {
  error.value = '';
  loading.value = true;
  try {
    await signInAws(region.value, accessKeyId.value, secretAccessKey.value);
  } catch (e) {
    error.value = e instanceof Error ? e.message : String(e);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="aws-login">
    <form class="card card-md" @submit.prevent="submit">
      <div class="card-body">
        <h2 class="h2 text-center mb-4">Đăng nhập AWS</h2>
        <div class="mb-3">
          <label class="form-label" for="aws-region">AWS_REGION</label>
          <input id="aws-region" v-model="region" class="form-control" required autocomplete="off" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="aws-access-key">AWS_ACCESS_KEY_ID</label>
          <input id="aws-access-key" v-model="accessKeyId" class="form-control" required autocomplete="username" />
        </div>
        <div class="mb-3">
          <label class="form-label" for="aws-secret-key">AWS_SECRET_ACCESS_KEY</label>
          <input id="aws-secret-key" v-model="secretAccessKey" type="password" class="form-control" required autocomplete="current-password" />
        </div>
        <div v-if="error" class="alert alert-danger" role="alert">Không kết nối được AWS: {{ error }}</div>
        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          {{ loading ? 'Đang kiểm tra…' : 'Đăng nhập' }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.aws-login { display: grid; min-height: 100vh; padding: 16px; place-items: center; }
.aws-login form { width: min(100%, 420px); }
</style>
