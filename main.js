// 文字カウンター
// 文字数を取得したいところのid属性やclass属性を入力してノードを取ってくる（#counter）
// keyupメソッドを使ってキーを離した時に処理が走るようにする
// 変数（ここではcount）の中に文字数の値を入れる
// 文字を表示したい場所（ここでは.show-count）を指定して.textで値(count)を表示させる

$(function(){

  $('#counter').keyup(function(){
    var count = $(this).val().length;

    $('.show-count').text(count);
  });

  const MSG_EMPTY = 'を入力してください';
  const MSG_TEXT_MAX = '　20文字以内で入力してください';
  const MSG_PHONE_TEXT = 'の形式で入力してください';
  const MSG_TEXTAREA_MAX = '　100文字以内で入力してください';

// 名前フォーム
// 文字を取得したいところのid属性やclass属性を入力してノードを取ってくる（.valid-name）
// keyupメソッドを使ってキーを離した時に処理が走るようにする

  $(function(){

    $('.valid-name').keyup(function(){
      var form_g = $(this).closest('.form-group');

      if($(this).val().length === 0){
        form_g.removeClass('success').addClass('error');
        form_g.find('.require').text(MSG_EMPTY);
      }else if($(this).val().length > 20){
        form_g.removeClass('success').addClass('error');
        form_g.find('.require').text(MSG_TEXT_MAX);
      }else{
        form_g.removeClass('error').addClass('success');
        form_g.find('.require').text('');
      }
    });
  });
// 電話番号
// 入力がない場合
// 電話番号の形式でない場合
    $(function(){
      $('.valid-phone').keyup(function(){
        var form_g = $(this).closest('.form-group');

        if($(this).val().length === 0){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_EMPTY);
        }else if($(this).val().length > 13 || !$(this).val().match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_PHONE_TEXT);
        }else{
          form_g.removeClass('error').addClass('success');
          form_g.find('.require').text('');
        }
      });
    });

    // e-mailのチェック
    // 入力がない場合
    // emailの形式でない場合
    $(function(){
      $('.valid-email').keyup(function(){
        var form_g = $(this).closest('.form-group');

        if($(this).val().length === 0){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_EMPTY);
        }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_PHONE_TEXT);
        }else{
          form_g.removeClass('error').addClass('success');
          form_g.find('.require').text('');
        }
      });
    });

    $(function(){
      $('#counter').keyup(function(){
        var form_g = $(this).closest('.form-group');

        if($(this).val().length === 0){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_EMPTY);
        }else if($(this).val().length > 100){
          form_g.removeClass('success').addClass('error');
          form_g.find('.require').text(MSG_TEXTAREA_MAX);
        }else{
          form_g.removeClass('error').addClass('success');
          form_g.find('.require').text('');
        }
      });
    });
});
