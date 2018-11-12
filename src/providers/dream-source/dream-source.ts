/*
  Generated class for the DreamSourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class DreamSourceProvider {

  constructor() { }

  /*
    戻り値：[{"name":"string", "items":[string[]]}]
  */
  getSegmentItems() {
    let segments = [
      {
        "name": "序文",
        "items": [`「ありがとう」という言葉は比較的耳にするとしても、「出逢えて良かった」という言葉は相手の人生に対して相当な感動やインパクトを与えないと出てこない言葉です。
          \n社員同士はお互いを自分の家族のように感じ、個性や役割を尊重し合い、苦楽を共にする関係を築いて、「三恵クリエスのメンバーで良かった」と言える関係を創りたい。
          \n私たちは神業の技術と、とびっきりの真心を込めたサービスを提供することで、お客様の本質的な課題を解決し、発展に大きく寄与して、「三恵クリエスさんに出逢えて良かった」と言われる会社になりたい。
          \n私たちが関わる全ての人と「出逢えて良かった」と言いあえるような関係を築いていくことが、私たちの夢であり、目指す理想のモデル企業です。`]
      },
      {
        "name": "Life Winner",
        "items": [`大志を抱き人生をかけて　継続的に努力し、決断した道を前進する人である。
          \n常に学び常に直面する障害を乗り越える方法を考え、実践する人である。
          \nまず自立し失敗しても他人のせいにせず、最後まで責任を取る人である。
          \n決断した道を進む過程を通じて、自分そして周囲の人に対しても感動と幸福を与える人である。`]
      },
      {
        "name": "Vision",
        "items": [`「あなたに出逢えて良かった」と言われるNo.1の企業グループになります。`]
      },
      {
        "name": "Mission",
        "items": [`First Step
          \n三恵クリエスは、社員の人格成長と専門スキル向上のために、必要な教育やチャンスを提供します。
          \nSecond Step
          \n三恵クリエスは、お客様の発展と幸福のために、ハートフルなITサービスを提供します。
          \nThird Step
          \n三恵クリエスは、「ありがとう」があふれる未来のために、「家族文化*」を発信し続けます。
          \n*お互いを自分の家族のように感じ、個性や役割を尊重し合い、苦楽を共にする関係`]
      },
    ];
    return segments;
  }

  /*
    戻り値：{"name":"string", "items":[string[]]}
  */
  getItem(name, num) {
    let item = {
      "name": name,
      "items": []
    };
    for (let i = 0; i < num; i++) {
      item.items.push("item" + i);
    }
    return item;
  }

}
