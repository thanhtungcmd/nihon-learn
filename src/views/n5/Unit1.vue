<template>
	<section class="card shadow-sm border-0">
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

			<div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

			<div class="mt-5 table-responsive">
				<table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
					<tbody>
						<tr v-for="item in vocabularyList" :key="item.japanese.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese)" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>

      <div class="mt-5 text">Hội thoại cơ bản</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <tbody>
						<tr v-for="item in questionList" :key="item.japanese.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese)" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

		</div>
	</section>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
import { playJapanesePronunciation } from '@/services/pollyService';

interface VocabularyItem {
  japanese: string[];
  vietnamese: string[];
}

const vocabularyList: VocabularyItem[] = [
  { japanese: ['わたし'], vietnamese: ['tôi'] },
  { japanese: ['あにた'], vietnamese: ['bạn'] },
  { japanese: ['あのひと'], vietnamese: ['bạn kia'] },
  { japanese: ['～さん'], vietnamese: ['~ hậu tố thêm phía sau để lịch sự'] },
  { japanese: ['～ちゃん'], vietnamese: ['~ hậu tố thêm phía sau tên trẻ em'] },
  { japanese: ['～じん'], vietnamese: ['~ hậu tố chỉ người'] },
  { japanese: ['せんせい'], vietnamese: ['giáo viên trang trọng'] },
  { japanese: ['きょうし'], vietnamese: ['giáo viên'] },
  { japanese: ['がくせい'], vietnamese: ['học sinh'] },
  { japanese: ['かいしゃいん'], vietnamese: ['nhân viên công ty'] },
  { japanese: ['しゃいん'], vietnamese: ['nhân viên công ty'] },
  { japanese: ['ぎんこういん'], vietnamese: ['nhân viên ngân hàng'] },
  { japanese: ['いしゃ'], vietnamese: ['bác sĩ'] },
  { japanese: ['けんきゅうしゃ'], vietnamese: ['nhà nghiên cứu'] },
  { japanese: ['エンジニア'], vietnamese: ['kỹ sư'] },
  { japanese: ['だいがく'], vietnamese: ['đại học'] },
  { japanese: ['びょういん'], vietnamese: ['bệnh viện'] },
  { japanese: ['だれ', '(どなた)'], vietnamese: ['Ai?', 'どなた cách nói lịch sự', 'だれ cách nói thông thường'] },
  { japanese: ['～さい'], vietnamese: ['~ tuổi'] },
  { japanese: ['なんさい', '(ないくつ)'], vietnamese: ['bao nhiêu tuổi?', 'なんさい nói thông thường', 'ないくつ nói lịch sự'] },
  { japanese: ['はい'], vietnamese: ['vâng'] },
  { japanese: ['いいえ'], vietnamese: ['không'] },
  { japanese: ['はじめまして'], vietnamese: ['rất hân hạnh được gặp anh chị'] },
  { japanese: ['～からきました'], vietnamese: ['tôi đến từ ~'] },
  { japanese: ['どうぞよろしく', '[おねがいします]'], vietnamese: ['rất vui khi được làm quen'] },
  { japanese: ['しつれいですが'], vietnamese: ['xin lỗi (khi muốn hỏi thông tin)'] },
  { japanese: ['おなまえは？'], vietnamese: ['tên anh chị là gì?'] },
  { japanese: ['こちらは～さんです'], vietnamese: ['đây là anh/chị ~'] },
  { japanese: ['アメリカ'], vietnamese: ['nước Mỹ'] },
  { japanese: ['イギリス'], vietnamese: ['nước Anh'] },
  { japanese: ['イソド'], vietnamese: ['Ấn Độ'] },
  { japanese: ['イソドネシア'], vietnamese: ['Indonesia'] },
];

const questionList: VocabularyItem[] = [
  { japanese: ['はじめまして。'], vietnamese: ['Rất vui được gặp bạn'] },
  { japanese: ['おなまえは？'], vietnamese: ['Tên của bạn là gì?'] },
  { japanese: ['(わたしは)トゥンです'], vietnamese: ['Công việc của bạn là gì?'] },
  { japanese: ['おしごとは？'], vietnamese: ['Công việc của bạn là gì?'] },
  { japanese: ['(わたしは)エンジニアです'], vietnamese: ['Công việc của bạn là gì?'] },
  { japanese: ['よろしくおねがいします。'], vietnamese: ['Rất mong được giúp đỡ'] },
]

async function playPronunciation(text: string | string[]) {
  try {
    const textToPlay = Array.isArray(text) ? text.join('') : text;
    await playJapanesePronunciation(textToPlay);
  } catch (error) {
    console.error('Failed to play pronunciation:', error);
  }
}
</script>

<style scoped>
rt {
	font-size: 24px;
}

.icon-volume {
	cursor: pointer;
}
</style>