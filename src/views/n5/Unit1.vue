<template>
	<section class="card shadow-sm border-0">
		<div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
			<button type="button" class="btn btn-sm btn-outline-primary w-100" @click="handleTranslateSelection">
				Dịch / Phát âm
			</button>
		</div>
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

			<div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

			<div class="mt-5 table-responsive">
				<table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
					<tbody>
						<tr v-for="item in vocabularyList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>

      <div class="mt-5 text">Hội thoại cơ bản</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in questionList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu khẳng định</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in grammarPositiveList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu phủ định</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in grammarNegativeList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu hỏi có / không?</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in grammarYesNoList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu hỏi ai đấy?</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 45%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in grammarWhoList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

		</div>
	</section>
</template>

<script setup lang="ts">
import { IconVolume, IconEye } from '@tabler/icons-vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

const { showContextMenu, contextMenuStyle, runSelectedAction } = useSelectionActions({
  onAction: (selectedText) => void playPronunciation(selectedText),
  shortcutKey: 'k',
});

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
  { japanese: ['なんさい', '(おいくつ)'], vietnamese: ['bao nhiêu tuổi?', 'なんさい nói thông thường', 'ないくつ nói lịch sự'] },
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
  { japanese: ['(わたしは)トゥンです'], vietnamese: ['Tên tôi là Tùng'] },
  { japanese: ['おしごとは？'], vietnamese: ['Công việc của bạn là gì?'] },
  { japanese: ['(わたしは)エンジニアです'], vietnamese: ['Công việc của tôi là kỹ sư'] },
  { japanese: ['ことしはにじゅうななさいです'], vietnamese: ['Năm nay tôi 27 tuổi'] },
  { japanese: ['ベトナムからきました'], vietnamese: ['Tôi đến từ việt nam'] },
  { japanese: ['どうぞ よろしく おねがい します。'], vietnamese: ['Rất mong được giúp đỡ'] },
]

const grammarPositiveList: VocabularyItem[] = [
  { japanese: ['やまださんはにほんじんです。'], vietnamese: ['Yamada-san là người Nhật'] },
  { japanese: ['ワットさんはイギリスじんです。'], vietnamese: ['Watt-san là người Anh'] },
  { japanese: ['タワボンさんはタイじんです。'], vietnamese: ['Tawabon-san là người Thái'] },
  { japanese: ['シュミットさんはドイツじんです。'], vietnamese: ['Schmitt-san là người Đức'] },
  { japanese: ['やまださんはぎんこういんです。'], vietnamese: ['Yamada-san là nhân viên ngân hàng'] },
  { japanese: ['ワットさんはせんせいです。'], vietnamese: ['Watt-san là giáo viên'] },
  { japanese: ['タワボンさんはがくせいです。'], vietnamese: ['Tawabon-san là học sinh'] },
  { japanese: ['シュミットさんはかいしゃいんです。'], vietnamese: ['Schmitt-san là nhân viên công ty'] },
]

const grammarNegativeList: VocabularyItem[] = [
  { japanese: ['やまださんはがくせいじゃありません。'], vietnamese: ['Yamada-san không phải là học sinh'] },
  { japanese: ['ワットさんはドイツじんじゃありません。'], vietnamese: ['Watt-san không phải là người Đức'] },
  { japanese: ['タワボンさんはせんせいじゃありません。'], vietnamese: ['Tawabon-san không phải là giáo viên'] },
  { japanese: ['シュミットさんはアメリカじんじゃありません。'], vietnamese: ['Schmitt-san không phải là người Mỹ'] },
]

const grammarYesNoList: VocabularyItem[] = [
  { japanese: [
    'やまださんはぎんこういんですか。',
    'はい、ぎんこういんです。',
  ], vietnamese: [
    'Anh Yamada là nhân viên ngân hàng phải không?',
    'Có, anh ấy là nhân viên ngân hàng.',
  ] },
  { japanese: [
    'ワットさんはかいしゃいんですか。',
    'いいえ、かいしゃいんじゃありません。',
  ], vietnamese: [
    'Anh Watt là nhân viên công ty phải không?',
    'Không, anh ấy không phải nhân viên công ty.',
  ] },
  { japanese: [
    'タワボンさんはせんせいですか。',
    'いいえ、せんせいじゃありません。',
  ], vietnamese: [
    'Anh Tawabon là giáo viên phải không?',
    'Không, anh ấy không phải giáo viên.',
  ] },
  { japanese: [
    'シュミットさんはドイツじんですか。',
    'はい、ドイツじんです。',
  ], vietnamese: [
    'Anh Schmitt là người Đức phải không?',
    'Có, anh ấy là người Đức.',
  ] },
]

const grammarWhoList: VocabularyItem[] = [
  { japanese: [
    'あのかたはどなたですか。',
    'イーさんです。AKCのけんきゅうしゃです。',
  ], vietnamese: [
    'Người kia là ai vậy?',
    'Anh ấy là anh I. Anh ấy là nhà nghiên cứu của AKC.',
  ] },
  { japanese: [
    'あのかたはどなたですか。',
    'ワンさんです。こうべびょういんのいしゃです。',
  ] },
  { japanese: [
    'あのかたはどなたですか。',
    'カリナさんです。ふじだいがくのがくせいです。',
  ] },
  { japanese: [
    'あのかたはどなたですか。',
    'サントスさんです。,ブラジルエアーのしゃいんです。',
  ] },
]

function handleTranslateSelection() {
  runSelectedAction();
}

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

.context-menu {
	position: fixed;
	z-index: 2000;
	background: white;
	border: 1px solid #d0d7de;
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
	padding: 6px;
	min-width: 150px;
}

.context-menu .btn {
	text-align: left;
}

.icon-volume {
	cursor: pointer;
}
</style>