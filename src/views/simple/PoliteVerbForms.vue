<script setup lang="ts">
interface VerbRow {
  vietnamese: string;
  masu: string;
  masen: string;
  mashita: string;
  masenDeshita: string;
  mashou: string;
  masenKa: string;
}

const verbRows: VerbRow[] = [
  { vietnamese: 'ăn', masu: 'たべます', masen: 'たべません', mashita: 'たべました', masenDeshita: 'たべませんでした', mashou: 'たべましょう', masenKa: 'たべませんか' },
  { vietnamese: 'đi', masu: 'いきます', masen: 'いきません', mashita: 'いきました', masenDeshita: 'いきませんでした', mashou: 'いきましょう', masenKa: 'いきませんか' },
  { vietnamese: 'uống', masu: 'のみます', masen: 'のみません', mashita: 'のみました', masenDeshita: 'のみませんでした', mashou: 'のみましょう', masenKa: 'のみませんか' },
  { vietnamese: 'chụp ảnh', masu: 'とります', masen: 'とりません', mashita: 'とりました', masenDeshita: 'とりませんでした', mashou: 'とりましょう', masenKa: 'とりませんか' },
  { vietnamese: 'xem', masu: 'みます', masen: 'みません', mashita: 'みました', masenDeshita: 'みませんでした', mashou: 'みましょう', masenKa: 'みませんか' },
  { vietnamese: 'về', masu: 'かえります', masen: 'かえりません', mashita: 'かえりました', masenDeshita: 'かえりませんでした', mashou: 'かえりましょう', masenKa: 'かえりませんか' },
];

const formHeaders = [
  { key: 'masu', label: '～ます', description: 'Khẳng định hiện tại / tương lai' },
  { key: 'masen', label: '～ません', description: 'Phủ định hiện tại / tương lai' },
  { key: 'mashita', label: '～ました', description: 'Khẳng định quá khứ' },
  { key: 'masenDeshita', label: '～ませんでした', description: 'Phủ định quá khứ' },
  { key: 'mashou', label: '～ましょう', description: 'Rủ rê: Hãy cùng…' },
  { key: 'masenKa', label: '～ませんか', description: 'Mời: Bạn có muốn… không?' },
] as const;
</script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Bảng chia động từ tiếng Nhật – Thể lịch sự (ます形)</h1>

      <div class="table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3" style="min-width: 1400px; width: 100%;">
          <thead>
            <tr>
              <th scope="col" rowspan="2" style="min-width: 180px;">Động từ</th>
              <th v-for="form in formHeaders" :key="form.key" scope="col">
                {{ form.label }}
              </th>
            </tr>
            <tr>
              <th v-for="form in formHeaders" :key="`${form.key}-description`" scope="col">
                {{ form.description }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="verb in verbRows" :key="verb.vietnamese">
              <td >{{ verb.vietnamese }}</td>
              <td v-for="form in formHeaders" :key="form.key"><span class="text-nowrap">{{ verb[form.key] }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-muted mb-0">Mẹo: chọn một động từ trong bảng rồi nhấn <kbd>K</kbd> để nghe phát âm.</p>
    </div>
  </section>
</template>
