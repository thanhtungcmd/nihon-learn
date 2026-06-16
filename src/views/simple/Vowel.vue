<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Nguyên âm dài</h1>
      <div class="mt-3 text">
        - Trường âm của cột あ thì thêm あ <br>
        - Trường âm của cột い thì thêm い <br>
        - Trường âm của cột う thì thêm う <br>
        - Trường âm của cột え thì thêm い <br>
        - Trường âm của cột お thì thêm う
      </div>
    </div>
  </section>

  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Cách phát âm ん</h1>
      <div class="mt-3 text">
        - Nếu chữ tiếp theo thuộc hàng た,だ,ら,な thì nó sẽ được phát âm là n <br>
        - Nếu chữ tiếp theo thuộc hàng ば,ぱ,ま thì nó sẽ được phát âm là m <br>
        - Nếu chữ tiếp theo thuộc hàng か,が thì nó sẽ được phát âm là ng
      </div>
    </div>
  </section>

  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Cách phát âm つ</h1>
      <div class="mt-3 text">
        - Nếu つ đứng trước các âm thuộc hàng か,さ,た,ぱ thì phụ âm đó sẽ được phát âm gấp đôi
      </div>
      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3" style="max-width: 600px; table-layout: fixed; width: 100%;">
          <tbody>
            <tr>
              <td>ぶ<u>っ</u>か</td>
              <td>bu<u>k</u>ka</td>
            </tr>
            <tr>
              <td>か<u>っ</u>さい</td>
              <td>ka<u>s</u>sai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <router-link class="btn btn-outline-primary mt-4" to="/">Back</router-link>
</template>

<script lang="ts"></script>