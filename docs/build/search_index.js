var documenterSearchIndex = {"docs":
[{"location":"chapter1/01/#FortranとJuliaの文法比較","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"","category":"section"},{"location":"chapter1/01/#演算子","page":"FortranとJuliaの文法比較","title":"演算子","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"FortranとJuliaの演算子その他について比較してみましょう。ほとんど同じですが、一部だけ異なります。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"定義 Fortran Julia\na+b a+b a+b\na-b a-b a-b\na times b a*b a*b\na div b a/b a/b(実数)、div(a,b)(商（整数）)、a÷b(divと同じ。入力は\\divで。)\na div bの余り mod(a,b) a % b\na^b a**b a^b\nsin a  cos b sin(a),cos(b) sin(a),cos(b)\na abs(a) abs(a)\nsqrta sqrt(a) sqrt(a)\ne^a exp(a) exp(a)\nlog a log(a) log(a)\n6 times 10^-4 (倍精度) 6d-4 6e-4\nzの複素共役 conjg(z) conj(z)\nrm Rez dble(z) real(z)\nrm Imz dimag(z) imag(z)\nrm Max(ab) max(a,b) max(a,b)","category":"page"},{"location":"chapter1/01/#繰り返しループ","page":"FortranとJuliaの文法比較","title":"繰り返しループ","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"do i=1,5\nend do","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"というdoループが用いられますが、対応するJuliaのループはforを使って、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"for i=1:5\nend","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ループの途中で抜けたい場合、Fortranではexitを、Juliaではbreakを使います。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ループの次の反復ステップに行きたい場合には、Fortranではcycleを、Juliaではcontinueを使います。","category":"page"},{"location":"chapter1/01/#If文","page":"FortranとJuliaの文法比較","title":"If文","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"条件分岐にはどちらもIf文を使います。Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"if (a > b) then\nelse if(a < b) then\nelse\nendif","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のような形で書きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"if a > b\nelseif a < b\nelse\nend","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。条件比較に使う比較演算子の違いをテーブルにまとめると","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"FORTRAN77 Fortran Julia\na .lt. b a < b a < b\na .le. b a <= b a <= b\na .eq. b a == b a == b\na .ne. b a /= b a != b\na .gt. b a > b a > b\na .ge. b a >= b a >= b","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となります。複数の条件を使う場合の違いは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"定義 Fortran Julia\naかつb a .and. b a && b\naまたはb a .or. b a || b","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"です。","category":"page"},{"location":"chapter1/01/#出力","page":"FortranとJuliaの文法比較","title":"出力","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranで画面に書き出したい場合には","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"write(*,*) \"a = \",a","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のように書きます。Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = \",a)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"あるいは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = $a\")","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。$aと書くと変数を文字列に変えることができます。また、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"write(*,*) \"a = \",2*a","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"であれば、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = $(2*a)\")","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書けます。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ファイルに出力する場合、Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"open(10,file=\"test.txt\")\nwrite(10,*) \"a = \",2*a\nclose(10)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のように装置番号を指定してファイルを開きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"fp = open(\"test.txt\",\"w\")\nprintln(fp,\"a = $(2*a)\")\nclose(fp)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。","category":"page"},{"location":"chapter1/01/#入力","page":"FortranとJuliaの文法比較","title":"入力","text":"","category":"section"},{"location":"chapter1/01/#配列へのアクセス","page":"FortranとJuliaの文法比較","title":"配列へのアクセス","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは配列aのi,j成分にアクセスするには","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a(i,j)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a[i,j]","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。 配列のメモリへの格納順はFortranとJuliaでは同じになっており、行列で言うところの列の単位で格納されています（一番左の添字が一番内側）。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"配列の一部分へのアクセスもよく似ており、Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a(1:4,1:5)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となり、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a[1:4,1:5]","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となります。","category":"page"},{"location":"#Fortranから始めるJulia","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"","category":"section"},{"location":"#目次","page":"Fortranから始めるJulia","title":"目次","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"    Pages = [\n          \"chapter1/01.md\"\n    ]\n    Depth = 3","category":"page"},{"location":"#はじめに","page":"Fortranから始めるJulia","title":"はじめに","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"このウェブサイトは、Fortranで数値計算を行なったことがある人が、Juliaについて勉強するためのサイトです。そのため、Fortranについてはある程度の知識がありコードを書いたことがある人を対象として、Juliaについて解説したいと思います。","category":"page"},{"location":"#Juliaはどんなプログラミング言語か","page":"Fortranから始めるJulia","title":"Juliaはどんなプログラミング言語か","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Juliaという言語がどのような考えで開発されたか、についてはなぜ僕らはJuliaを作ったかを見てみてください。非常に新しい言語で、数値計算がしやすい言語として開発されています。","category":"page"},{"location":"#Fortran使いがJuliaを学ぶメリット","page":"Fortranから始めるJulia","title":"Fortran使いがJuliaを学ぶメリット","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Fortran使いがJuliaを学ぶメリットについて述べます。 まず、大前提として、本当に本気の大規模な並列計算を伴う数値計算を行う場合には、現状ではFortranを使った方が高速だと思います。多くのスーパーコンピュータではそのスパコンに最適化されたコンパイラが提供されており、それらのコンパイラを用いて適切にチューニングされたFortranのコードは最高速度を達成すると思います。そして、計算期間が数ヶ月以上に渡るような計算の場合には、数パーセントの高速化が非常に重要になってきますが、そのような場合にはJuliaよりFortranの方が向いていると思います。 また、ちゃんと動いている既存の大きめなFortranコードをJuliaで書き換える必要はないと思います。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"それでは、Juliaにはどのようなメリットがあるでしょうか。以下の点がFortran使いにとって重要だと思います。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"実行前にコンパイルが必要ない。コンパイルに四苦八苦することがなくなる\n他の人が作ったライブラリが豊富にあり、かつ導入が簡単\n最新のモダンなコーディング技術を使えるため、書きやすくとメンテナンスのしやすいコードが書ける\n古（いにしえ）のFORTRANコードから決別できる（かもしれない）\nFortranと文法が似ている：配列の添字の始まりが1から(Pythonは0から)、配列のメモリ格納順が列ベース、等、Fortranと似ている","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"それぞれの項目について説明していきます。","category":"page"},{"location":"#.-実行前にコンパイルが必要ない","page":"Fortranから始めるJulia","title":"1. 実行前にコンパイルが必要ない","text":"","category":"section"},{"location":"#.-他の人が作ったライブラリが豊富にあり、かつ導入が簡単","page":"Fortranから始めるJulia","title":"2. 他の人が作ったライブラリが豊富にあり、かつ導入が簡単","text":"","category":"section"},{"location":"#.-最新のモダンなコーディング技術を使えるため、書きやすくとメンテナンスのしやすいコードが書ける","page":"Fortranから始めるJulia","title":"3. 最新のモダンなコーディング技術を使えるため、書きやすくとメンテナンスのしやすいコードが書ける","text":"","category":"section"},{"location":"#.-古（いにしえ）のFORTRANコードから決別できる（かもしれない）","page":"Fortranから始めるJulia","title":"4. 古（いにしえ）のFORTRANコードから決別できる（かもしれない）","text":"","category":"section"},{"location":"#.-Fortranと文法が似ている","page":"Fortranから始めるJulia","title":"5. Fortranと文法が似ている","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"配列の添字が1始まりであるため、Fortranのコードを素朴に移植することが容易です。PythonやCは0始まりですから、それらよりも違和感は少ないと思います。 FortranとJuliaがどのくらい文法が似ているかは後述します。","category":"page"}]
}
