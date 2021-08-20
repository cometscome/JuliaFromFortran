var documenterSearchIndex = {"docs":
[{"location":"chapter1/02/#線形代数計算","page":"線形代数計算","title":"線形代数計算","text":"","category":"section"},{"location":"chapter1/01/#FortranとJuliaの文法比較","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"","category":"section"},{"location":"chapter1/01/#演算子","page":"FortranとJuliaの文法比較","title":"演算子","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"FortranとJuliaの演算子その他について比較してみましょう。ほとんど同じですが、一部だけ異なります。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"定義 Fortran Julia\na+b a+b a+b\na-b a-b a-b\na times b a*b a*b\na div b a/b a/b(実数)、div(a,b)(商（整数）)、a÷b(divと同じ。入力は\\divで。)\na div bの余り mod(a,b) a % b\na^b a**b a^b\nsin a  cos b sin(a),cos(b) sin(a),cos(b)\na abs(a) abs(a)\nsqrta sqrt(a) sqrt(a)\ne^a exp(a) exp(a)\nlog a log(a) log(a)\n6 times 10^-4 (倍精度) 6d-4 6e-4\nzの複素共役 conjg(z) conj(z)\nrm Rez dble(z) real(z)\nrm Imz dimag(z) imag(z)\nrm Max(ab) max(a,b) max(a,b)","category":"page"},{"location":"chapter1/01/#繰り返しループ","page":"FortranとJuliaの文法比較","title":"繰り返しループ","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"do i=1,5\nend do","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"というdoループが用いられますが、対応するJuliaのループはforを使って、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"for i=1:5\nend","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ループの途中で抜けたい場合、Fortranではexitを、Juliaではbreakを使います。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ループの次の反復ステップに行きたい場合には、Fortranではcycleを、Juliaではcontinueを使います。","category":"page"},{"location":"chapter1/01/#If文","page":"FortranとJuliaの文法比較","title":"If文","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"条件分岐にはどちらもIf文を使います。Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"if (a > b) then\nelse if(a < b) then\nelse\nendif","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のような形で書きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"if a > b\nelseif a < b\nelse\nend","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。条件比較に使う比較演算子の違いをテーブルにまとめると","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"FORTRAN77 Fortran Julia\na .lt. b a < b a < b\na .le. b a <= b a <= b\na .eq. b a == b a == b\na .ne. b a /= b a != b\na .gt. b a > b a > b\na .ge. b a >= b a >= b","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となります。複数の条件を使う場合の違いは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"定義 Fortran Julia\naかつb a .and. b a && b\naまたはb a .or. b a || b","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"です。","category":"page"},{"location":"chapter1/01/#型の対応","page":"FortranとJuliaの文法比較","title":"型の対応","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは変数の型を定義しなければコンパイルエラーが起きますが、Juliaの場合は型を意識せずにコーディングすることができます。一方、内部ではJuliaはやはり型を扱っていますから、Fortran使用者はFortranとJuliaの型の対応を知っておくと理解しやすいでしょう。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"種類 Fortran Julia\n倍精度実数 real*8やreal(8) Float64\n単精度実数 realやreal(4) Float32\n32ビット符号付き整数 integer(機種依存及びコンパイルオプション依存)やinteger(4) Int32\n64ビット符号付き整数 integer(機種依存及びコンパイルオプション依存)やinteger(8) Int64\n倍精度複素数 complex*16やcomplex(8) ComplexF64\n単精度複素数 complexやcomplex(4) ComplexF32\n論理値 logical Bool\n文字データ character String","category":"page"},{"location":"chapter1/01/#配列の型と定義","page":"FortranとJuliaの文法比較","title":"配列の型と定義","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranは科学技術計算用のプログラミング言語ですから、行列やベクトルを表現する配列の操作が（他の同じ歴史の長いプログラミング言語等よりも）容易です。一方、Juliaも科学技術計算用として作られていますから、当然、配列の操作も容易です。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"それでは、まず配列の定義方法について比較してきましょう。Fortranでは配列の定義は","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"real(8)::d(1:3,1:4)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のような形で書きますね（他の書き方は省略）。この場合はdは倍精度実数が要素の2次元配列です。この配列の中身は決まっていませんので、通常は","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"d = 0d0","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"などと初期化します。Juliaの場合、0で初期化した2次元配列が必要な場合","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"d = zeros(Float64,3,4)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。もし、Fortranと同じように初期化されていない配列が欲しい場合には、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"d = Array{Float64,2}(undef,3,4)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。Array{Float64,2}の2は配列の次元を示し、(undef,3,4)の3,4はそれぞれの次元の要素数を示します。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"倍精度複素数の3次元配列が欲しい場合は、Fortranであれば","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"complex(8)::f(1:2,1:3,1:5)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"で定義できます。Juliaであれば","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"f = zeros(ComplexF64,2,3,5)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となります。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranではallocatableを使えば","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"real(8),allocatable::d(:,:)\nallocate(d(1:3,1:4))","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"というような形で、実行時に動的に配列の形状を決めることができていました。Juliaのzeros(Float64,3,4)やArray{Float64,2}(undef,3,4)などはこれと同じように動的に配列の形状を決めていると考えても構いません。両者はよく似ています。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranの場合、配列の始まりと終わりを好きなように決めることができました。例えば、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"real(8)::d(1:2,3:9)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"というdを定義すると、1次元目の添字の範囲は1から2、2次元目の添字の範囲が3から9の配列を定義することができます。Juliaではデフォルトではこのような添字の範囲を設定することはできません。しかし、JuliaのパッケージにはOffsetArraysというパッケージがありまして、これを使うことで同じことが可能となります。例えば、上のような配列の場合には","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"using OffsetArrays\nc = Array{Float64,2}(undef,2,7)\nd = OffsetArray(c, 1:2, 3:9)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"とすればdの添字の範囲はFortranと同じになります。なお、OffsetArraysを使って通常の配列cからdを作成する時にメモリのコピーは発生しておりませんので、追加のコストはほとんどかかりません。","category":"page"},{"location":"chapter1/01/#出力","page":"FortranとJuliaの文法比較","title":"出力","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranで画面に書き出したい場合には","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"write(*,*) \"a = \",a","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のように書きます。Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = \",a)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"あるいは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = $a\")","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。$aと書くと変数を文字列に変えることができます。また、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"write(*,*) \"a = \",2*a","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"であれば、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"println(\"a = $(2*a)\")","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書けます。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"ファイルに出力する場合、Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"open(10,file=\"test.txt\")\nwrite(10,*) \"a = \",2*a\nclose(10)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"のように装置番号を指定してファイルを開きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"fp = open(\"test.txt\",\"w\")\nprintln(fp,\"a = $(2*a)\")\nclose(fp)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。","category":"page"},{"location":"chapter1/01/#入力","page":"FortranとJuliaの文法比較","title":"入力","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"テキストファイルtest.txtが","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"           1   3.0000000000000000     \n           2   6.0000000000000000     \n           3   9.0000000000000000     \n           4   12.000000000000000   ","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"というデータだとしましょう。このファイルからデータを読み込む場合、Fortranでは、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"    open(12,file=\"test.txt\")\n    do i=1,4\n        read(12,*) j,x\n        write(*,*) j,x\n    end do\n    close(12)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"とすることで読み込むことができます。Juliaの場合には、","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"data = readlines(\"test.txt\")\nfor i=1:4\n    u = split(data[i])\n    j = parse(Int64,u[1])\n    x = parse(Float64,u[2])\n    println(\"$j $x\")\nend","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"で読み込めます。Juliaではこのreadlineを使うやり方の他にも読み込みの方法がありますが、ここでは使い勝手の良いこの方法のみを紹介することとします。","category":"page"},{"location":"chapter1/01/#配列へのアクセス","page":"FortranとJuliaの文法比較","title":"配列へのアクセス","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは配列aのi,j成分にアクセスするには","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a(i,j)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きますが、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a[i,j]","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"と書きます。 配列のメモリへの格納順はFortranとJuliaでは同じになっており、行列で言うところの列の単位で格納されています（一番左の添字が一番内側）。","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"配列の一部分へのアクセスもよく似ており、Fortranでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a(1:4,1:5)","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となり、Juliaでは","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"a[1:4,1:5]","category":"page"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"となります。","category":"page"},{"location":"chapter1/01/#関数","page":"FortranとJuliaの文法比較","title":"関数","text":"","category":"section"},{"location":"chapter1/01/","page":"FortranとJuliaの文法比較","title":"FortranとJuliaの文法比較","text":"Fortranでは返り値が一つある場合にはfunctionを、返り値がない場合にはsubroutineを使っていました。","category":"page"},{"location":"chapter2/01/#FortranのコードをJuliaへ移植してみる","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"","category":"section"},{"location":"chapter2/01/#マンデルブロ集合","page":"FortranのコードをJuliaへ移植してみる","title":"マンデルブロ集合","text":"","category":"section"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"こちらの記事にはさまざまなFortranのバージョンで書かれたマンデルブロ集合のコードが紹介されています。","category":"page"},{"location":"chapter2/01/#Fortran90","page":"FortranのコードをJuliaへ移植してみる","title":"Fortran90","text":"","category":"section"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"この記事の中のFortran90のコードを引用します。コードは","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"PROGRAM mandel\n    IMPLICIT NONE\n    INTEGER, PARAMETER :: nx = 61, ny = 31, maxiter = 90\n    REAL   , PARAMETER :: x0 = -2.0, x1 = 2.0, y0 = -2.0, y1 = 2.0\n    INTEGER :: ix, iy, iter, mandelbrot(nx, ny)\n    REAL :: x, y\n    COMPLEX :: z, c\n    DO iy = 1, ny\n      y = y0 + (y1 - y0) * (iy - 1) / REAL(ny - 1) \n      DO ix = 1, nx\n        x = x0 + (x1 - x0) * (ix - 1) / REAL(nx - 1)  \n        c = CMPLX(x, y)\n        z = (0.0, 0.0)\n        DO iter = 0, maxiter\n          z = z * z + c\n          IF (ABS(z) > 2.0) EXIT\n        END DO    \n        mandelbrot(ix, iy) = iter\n      END DO    \n    END DO\n!\n    DO iy = 1, ny     \n      PRINT '(61I1)', (mandelbrot(:, iy) + 9) / 10 \n    END DO          \n    STOP\nEND PROGRAM mandel","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"です。このコードをgfortranでコンパイルし、実行しますと、","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"0000000000000000000000000000001000000000000000000000000000000\n0000000000000000000011111111111111111111100000000000000000000\n0000000000000000111111111111111111111111111110000000000000000\n0000000000001111111111111111111111111111111111111000000000000\n0000000000111111111111111111111111111111111111111110000000000\n0000000011111111111111111111111111111111111111111111100000000\n0000001111111111111111111111111111111111111111111111111000000\n0000011111111111111111111111111111111111111111111111111100000\n0000111111111111111111111111211111111111111111111111111110000\n000111111111111111111111111***2111111111111111111111111111000\n0011111111111111111113312223*72671111111111111111111111111100\n0011111111111111111111*************61111111111111111111111100\n011111111111111111112***************1111111111111111111111110\n0111111111112*4*3412****************2111111111111111111111110\n011111111212************************5111111111111111111111110\n**********************************311111111111111111111111111\n011111111212************************5111111111111111111111110\n0111111111112*4*3412****************2111111111111111111111110\n011111111111111111112***************1111111111111111111111110\n0011111111111111111111*************61111111111111111111111100\n0011111111111111111113312223*72661111111111111111111111111100\n000111111111111111111111111***2111111111111111111111111111000\n0000111111111111111111111111211111111111111111111111111110000\n0000011111111111111111111111111111111111111111111111111100000\n0000001111111111111111111111111111111111111111111111111000000\n0000000011111111111111111111111111111111111111111111100000000\n0000000000111111111111111111111111111111111111111110000000000\n0000000000001111111111111111111111111111111111111000000000000\n0000000000000000111111111111111111111111111110000000000000000\n0000000000000000000011111111111111111111100000000000000000000\n0000000000000000000000000000001000000000000000000000000000000","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"という出力が得られます。この出力を再現するようなJuliaのコードを書いてみましょう。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"作ったJuliaのコードは","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"function mandel()\n    nx = 61; ny = 31; maxiter = 90\n    x0 = -2.0; x1 = 2.0; y0 = -2.0; y1 = 2.0\n    mandelbrot = zeros(Int64,nx, ny)\n    mandelbrot .= maxiter\n    for iy=1:ny\n        y = y0 + (y1 - y0) * (iy - 1) / real(ny - 1) \n        for ix=1:nx\n            x = x0 + (x1 - x0) * (ix - 1) / real(nx - 1)\n            c = x + im*y\n            z = 0im\n            for iter=0:maxiter\n                z = z * z + c\n                if abs(z) > 2\n                    mandelbrot[ix,iy] = iter\n                    break\n                end\n            end\n            \n        end\n    end\n    for iy=1:ny\n        for ix=1:nx\n            if mandelbrot[ix,iy] == maxiter\n                print(\"*\")\n            else\n                print((mandelbrot[ix,iy]+9) ÷ 10)\n            end\n        end\n        println(\"\\t\")\n    end\nend\nmandel()","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"です。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"ポイントは","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"program mandelをfunction mandel()に変更\n;を使い一行に複数の文を入れた\n配列mandelbrotをmandelbrot = zeros(Int64,nx, ny)で定義\nFortranでループを抜けるexitは、対応するbreakに変更\nFortranはdo iter = 0, maxiterのループの途中で抜けた場合iterには抜けた時の値が入っているが、Juliaではiterのスコープがローカルなので外では未定義になっている。そのため、mandelbrot[ix,iy] = iterとした\niterのループが最大まで到達した時に、Fortranではmandelbrot(ix, iy)の中身はループの最後の値maxiterになるが、Juliaでは前述のようにiterはローカルスコープの変数なので値が入らない。なので、最初にmandelbrot .= maxiterと初期化した","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"などです。見比べるとはっきりとわかりますが、Fortran90のコードとJuliaのコードはよく似ています。","category":"page"},{"location":"chapter2/01/#Fortran90-モジュールを使用","page":"FortranのコードをJuliaへ移植してみる","title":"Fortran90 モジュールを使用","text":"","category":"section"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"次は、モジュールを使用したコードをJuliaコードに変化させてみます。 コードはこちらの記事からの引用しまして、","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"MODULE m_mandel\n    IMPLICIT NONE\n    INTEGER, PARAMETER :: maxiter = 90\n  CONTAINS\n    INTEGER FUNCTION mandel(c)\n      COMPLEX, INTENT(IN) :: c\n      COMPLEX :: z\n      z = (0.0, 0.0)\n      DO mandel = 0, maxiter\n        z = z * z + c\n        IF (ABS(z) > 2.0) EXIT\n      END DO    \n    END FUNCTION mandel \n  END MODULE m_mandel\n\n  PROGRAM mandel_main\n    USE m_mandel\n    IMPLICIT NONE\n    INTEGER, PARAMETER :: nx = 61, ny = 31\n    REAL   , PARAMETER :: x0 = -2.0, x1 = 2.0, y0 = -2.0, y1 = 2.0\n    INTEGER :: ix, iy, iter, mandelbrot(nx, ny)\n    REAL :: x, y\n    DO iy = 1, ny\n      y = y0 + (y1 - y0) * (iy - 1) / REAL(ny - 1)   \n      DO ix = 1, nx\n        x = x0 + (x1 - x0) * (ix - 1) / REAL(nx - 1)  \n        mandelbrot(ix, iy) = mandel(CMPLX(x, y)) \n      END DO    \n    END DO\n!\n    DO iy = 1, ny\n      PRINT '(61i1)', (mandelbrot(:, iy) + 9) / 10  \n    END DO    \n    STOP\n  END PROGRAM mandel_main","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"というものです。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"このコードをJuliaに移植してみますと、","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"module M_mandel\n    const maxiter = 90\n    export mandel,maxiter\n\n    function mandel(c)\n        z = 0im\n        count = maxiter\n        for i=0:maxiter\n            z = z * z + c\n            if abs(z) > 2\n                count = i\n                break\n            end\n        end\n        return count\n    end\nend\n\nusing .M_mandel\nfunction mandel_main()\n    nx = 61;ny = 31\n    x0 = -2.0;x1 = 2.0;y0 = -2.0;y1 = 2.0\n    mandelbrot = zeros(Int64,nx, ny)\n\n    for iy=1:ny\n        y = y0 + (y1 - y0) * (iy - 1) / real(ny - 1)\n        for ix=1:nx\n            x = x0 + (x1 - x0) * (ix - 1) / real(nx - 1)\n            mandelbrot[ix, iy] = mandel(x+im*y) \n        end  \n    end\n    \n    for iy=1:ny\n        for ix=1:nx\n            if mandelbrot[ix,iy] == maxiter\n                print(\"*\")\n            else\n                print((mandelbrot[ix,iy]+9) ÷ 10)\n            end\n        end\n        println(\"\\t\")\n    end\nend\nmandel_main()","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"となります。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"一つ目のFortran90コードで気をつけたポイントの他には、","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"MODULEはmoduleに。モジュールの名前はJuliaでは最初の一文字を大文字にする慣例があるのでそれにならった\nUSE m_mandelはusing .M_mandelに。関数の中ではなく、外に定義する\nFortranではモジュール内で宣言した変数や関数はデフォルトでshare属性を持っておりuseですぐに使えるが、Juliaの場合に同様にしたい場合にはexportをモジュール内で使っておく。使わない場合はM_mandel.mandel(x+im*y)とアクセスすることになる","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"ということに気をつけました。","category":"page"},{"location":"chapter2/01/#Fortran2003","page":"FortranのコードをJuliaへ移植してみる","title":"Fortran2003","text":"","category":"section"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"次は、同じ記事のFortran2003のコードをJuliaに移植してみます。Fortranのコードを引用すると","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"program mandel\n    implicit none\n    integer, parameter :: maxiter = 90, nx = 61, ny = 31\n    real   , parameter :: x0 = -2.0, x1 = 2.0, y0 = -2.0, y1 = 2.0\n    character(len = 10), parameter :: text = '|+o0O.@*#-'  \n    integer :: ix, iy, iter, mandelbrot(nx, ny) = 0, m(nx)  \n    real, allocatable :: x(:), y(:)\n    complex :: c(nx, ny), z(nx, ny) = (0.0, 0.0)\n    x = [( (x1 - x0) / (nx - 1) * (ix - 1) + x0, ix = 1, nx )]\n    y = [( (y1 - y0) / (ny - 1) * (iy - 1) + y0, iy = 1, ny )]\n    forall (ix = 1:nx, iy = 1:ny) c(ix, iy) = cmplx(x(ix), y(iy))\n    do iter = 0, maxiter\n      where (abs(z) <= 2.0) \n        z = z * z + c\n        mandelbrot = mandelbrot + 1\n      end where  \n    end do\n\n    do iy = 1, ny\n      m = (mandelbrot(:, iy) + 8) / 10  + 1\n      write(*, '(61a1)') (text(m(ix):m(ix)), ix = 1, nx)  \n    end do\n    stop\nend program mandel","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"となります。このコードをコンパイルして実行すると、","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"||||||||||||||||||||||||||||||+||||||||||||||||||||||||||||||\n||||||||||||||||||||+++++++++++++++++++++||||||||||||||||||||\n||||||||||||||||+++++++++++++++++++++++++++++||||||||||||||||\n||||||||||||+++++++++++++++++++++++++++++++++++++||||||||||||\n||||||||||+++++++++++++++++++++++++++++++++++++++++||||||||||\n||||||||+++++++++++++++++++++++++++++++++++++++++++++||||||||\n||||||+++++++++++++++++++++++++++++++++++++++++++++++++||||||\n|||||+++++++++++++++++++++++++++++++++++++++++++++++++++|||||\n||||++++++++++++++++++++++++o++++++++++++++++++++++++++++||||\n|||++++++++++++++++++++++++---o+++++++++++++++++++++++++++|||\n||+++++++++++++++++++00+ooo0-*o@*++++++++++++++++++++++++++||\n||++++++++++++++++++++-------------@+++++++++++++++++++++++||\n|+++++++++++++++++++o---------------++++++++++++++++++++++++|\n|+++++++++++o-O-0O+o----------------o+++++++++++++++++++++++|\n|++++++++o+o------------------------.+++++++++++++++++++++++|\n----------------------------------0++++++++++++++++++++++++++\n|++++++++o+o------------------------.+++++++++++++++++++++++|\n|+++++++++++o-O-0O+o----------------o+++++++++++++++++++++++|\n|+++++++++++++++++++o---------------++++++++++++++++++++++++|\n||++++++++++++++++++++-------------@+++++++++++++++++++++++||\n||+++++++++++++++++++00+ooo0-*o@@++++++++++++++++++++++++++||\n|||++++++++++++++++++++++++---o+++++++++++++++++++++++++++|||\n||||++++++++++++++++++++++++o++++++++++++++++++++++++++++||||\n|||||+++++++++++++++++++++++++++++++++++++++++++++++++++|||||\n||||||++++++++++++++++++++++++++++++++++++++++++++++++|||||||\n||||||||+++++++++++++++++++++++++++++++++++++++++++++||||||||\n||||||||||+++++++++++++++++++++++++++++++++++++++++||||||||||\n||||||||||||++++++++++++++++++++++++++++++++++++|||||||||||||\n||||||||||||||||+++++++++++++++++++++++++++++||||||||||||||||\n||||||||||||||||||||+++++++++++++++++++++||||||||||||||||||||\n||||||||||||||||||||||||||||||+||||||||||||||||||||||||||||||","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"となります。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"対応するJuliaのコードは","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"function mandel()\n    maxiter = 90;nx = 61; ny = 31\n    x0 = -2.0; x1 = 2.0; y0 = -2.0; y1 = 2.0\n\n    text = \"|+o0O.@*#-\"\n    z = zeros(ComplexF64,nx,ny)\n    mandelbrot = zeros(Int64,nx,ny)\n\n    x = [ (x1 - x0) / (nx - 1) * (ix - 1) + x0  for ix = 1:nx]\n    y = [ (y1 - y0) / (ny - 1) * (iy - 1) + y0  for iy = 1:ny]\n    c = [ x[ix]+im*y[iy] for ix=1:nx,iy=1:ny]\n    for iter=0:maxiter\n        for i=1:length(z)\n            if abs(z[i]) <= 2\n                z[i] = z[i]*z[i]+c[i]\n                mandelbrot[i] += 1\n            end\n        end\n    end\n\n    for iy=1:ny\n        m = (mandelbrot[:, iy] .+ 8) .÷ 10  .+ 1\n        [print(text[m[ix]:m[ix]]) for ix=1:nx]\n        println(\"\\t\")\n    end\nend\nmandel()","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"です。Fortranでのwhere構文（配列の各要素に条件式を当てはめてループする構文）のJulia対応が分かりませんでしたので、仕方がないのでforループを使いました。ただし、そのまま書いても芸がありませんので、2次元配列のzなどを1次元配列として取り出す方法を使ってみました。Juliaでは2次元配列をメモリ格納順に並べた1次元のインデックスを用いて値を操作することができます。","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"今回は","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"for文のリスト内包表記[ (x1 - x0) / (nx - 1) * (ix - 1) + x0  for ix = 1:nx]の使用\nFortranのforallの代わりに二重forループのリスト内包表記の使用","category":"page"},{"location":"chapter2/01/","page":"FortranのコードをJuliaへ移植してみる","title":"FortranのコードをJuliaへ移植してみる","text":"を行いました。","category":"page"},{"location":"#Fortranから始めるJulia","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"","category":"section"},{"location":"#はじめに","page":"Fortranから始めるJulia","title":"はじめに","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"このウェブサイトは、Fortranで数値計算を行なったことがある人が、Juliaについて勉強するためのサイトです。そのため、Fortranについてはある程度の知識がありコードを書いたことがある人を対象として、Juliaについて解説したいと思います。","category":"page"},{"location":"#目次","page":"Fortranから始めるJulia","title":"目次","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"    Pages = [\n          \"index.md\"\n          \"chapter1/01.md\"\n          \"chapter1/02.md\"\n          \"chapter2/01.md\"\n    ]\n    Depth = 3","category":"page"},{"location":"#Juliaはどんなプログラミング言語か","page":"Fortranから始めるJulia","title":"Juliaはどんなプログラミング言語か","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Juliaという言語がどのような考えで開発されたか、についてはなぜ僕らはJuliaを作ったかを見てみてください。非常に新しい言語で、数値計算がしやすい言語として開発されています。","category":"page"},{"location":"#Fortran使いがJuliaを学ぶメリット","page":"Fortranから始めるJulia","title":"Fortran使いがJuliaを学ぶメリット","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Fortran使いがJuliaを学ぶメリットについて述べます。 まず、大前提として、本当に本気の大規模な並列計算を伴う数値計算を行う場合には、現状ではFortranを使った方が高速だと思います。多くのスーパーコンピュータではそのスパコンに最適化されたコンパイラが提供されており、それらのコンパイラを用いて適切にチューニングされたFortranのコードは最高速度を達成すると思います。そして、計算期間が数ヶ月以上に渡るような計算の場合には、数パーセントの高速化が非常に重要になってきますが、そのような場合にはJuliaよりFortranの方が向いていると思います。 また、ちゃんと動いている既存の大きめなFortranコードをJuliaで書き換える必要はないと思います。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"それでは、Juliaにはどのようなメリットがあるでしょうか。以下の点がFortran使いにとって重要だと思います。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"実行前にコンパイルが必要ない。コンパイルに四苦八苦することがなくなる\n他の人が作ったライブラリが豊富にあり、かつ導入が簡単\n最新のモダンなコーディング技術を使えるため、書きやすくメンテナンスのしやすいコードが書ける\n古（いにしえ）のFORTRANコードから決別できる（かもしれない）\nFortranと文法が似ている：配列の添字の始まりが1から(Pythonは0から)、配列のメモリ格納順が列ベース、等、Fortranと似ている","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"それぞれの項目について説明していきます。","category":"page"},{"location":"#.-実行前にコンパイルが必要ない","page":"Fortranから始めるJulia","title":"1. 実行前にコンパイルが必要ない","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"FortranではコードをIntel Fortranコンパイラやgfortranでコンパイルし、実行ファイルを作って実行します。もしLAPACKやBLASなどのライブラリを使いたい場合には、コンパイル時にリンクを行います。複数のファイルからなるソースコードであれば、makefileを用いてコンパイルすることもあるでしょう。 Juliaではこのようなコンパイル作業は必要ありません。Juliaではコードを実行する直前に型推論と最適化を行ない、その後にコードを実行します。ですので、","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"julia hoge.jl","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"のような形でソースコードをそのまま実行することができます。 自分で書いたコードであればコンパイルはそれほど問題になりませんが、例えば他の人が書いたコードを改造して使いたい場合、コンパイル方法をどのようにすればよいかは計算機環境によって異なるために、コンパイル自体が難しい場合があります。Juliaではコンパイルという作業がありませんので、他の人が書いたコードをそのまますぐに実行することができます。","category":"page"},{"location":"#.-他の人が作ったライブラリが豊富にあり、かつ導入が簡単","page":"Fortranから始めるJulia","title":"2. 他の人が作ったライブラリが豊富にあり、かつ導入が簡単","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Fortranでは他の人が作ったライブラリを自分のコードに使う場合は、「ソースコードをそのまま使う」か「リンクが可能なライブラリとなっているものをコンパイル時にリンクする」という方法があります。どちらの方法であっても、複数のライブラリを自分のコードにリンクしてコンパイルして実行ファイルを作る、というのはなかなか難しいです。さらに、他の人が作ったライブラリがそもそも自分の計算機環境で動くのか、コンパイルが可能なのか、ということについても気を使う必要があります。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"そして、Fortranで書かれたコードというのはウェブ上ではあまり多くありません。よくあるのは、研究室で代々使っているコードや、論文の著者のウェブサイトからダウンロードしたコードや、直接やりとりをしてもらったコードだと思います。あるいは、有償あるいはオープンソースで書かれた20年近く使われ続けている巨大プロジェクトのコードだと思います。Fortranは研究室単位やプロジェクト単位で使われていることが多いため、「自由に使えるパッケージ」という概念がほとんどありません（最近はFortranでもパッケージ管理システムを作ろうという試みがこちらにあるようです）。そのため、必要な機能は自分で実装するか詳しい人にコードのありかを聞くことになります。例えば、非線形な関数f(x)の最小値となるxを求める場合、どうしますか？　詳しい方であれば、Intel Math Kernel Library (MKL)に非線形最小二乗問題を解くためのルーチンが含まれていることを知っていると思います。しかし、その存在をどうやって知ればよいでしょうか？　あるいは、2変数関数f(xy)のあるデータ点での値を複数持っているときにスプライン補間でデータを補間したい場合、どうすればいいでしょうか？　Fortranにはこの目的のためのDIERCKXというコードがあるという情報に辿り着けるでしょうか？　そして、どのように使うかわかるでしょうか？","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Juliaであれば、非線形関数の最小化のパッケージとしてOptimというパッケージがあり、スプライン補間用パッケージにDierckxがあり（実はDIERCKXのラッパーパッケージ）、どちらも簡単に使うことができます。","category":"page"},{"location":"#.-最新のモダンなコーディング技術を使えるため、書きやすくメンテナンスのしやすいコードが書ける","page":"Fortranから始めるJulia","title":"3. 最新のモダンなコーディング技術を使えるため、書きやすくメンテナンスのしやすいコードが書ける","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Fortranは歴史が長く、古いコードであってもコンパイルが可能で実行が可能であるということが大きな利点にひとつになっていると思います。科学技術分野における数値計算であれば物理現象自体が変わることはそうそうありませんから、非常に良いパフォーマンスを発揮する古いコードも使う価値があります。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"一方で、それらのコードを改造して新しい問題に対応させようとすると、よほどのFORTRAN/Fortran経験者でなければ困難になります。そして、FORTRANをいじれる人間はFORTRANをいじったことがある人間だけですから、現代でわざわざFORTRANをいじる新規参入者は少なく、FORTRAN人口は減っていってしまうでしょう。それでも巨大なプロジェクトのコードであれば開発者を確保することができるかも知れませんが、研究室単位、あるいは数人のグループによって開発されたコードの場合、読むのが困難でしょう。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"例えば、FORTRAN77時代に変数を複数の箇所で使う場合にはcommon文というものが使われていました。Fortran 90以降においてはcommon文を使うのではなくmoduleを使うことが推奨されるようになりました。しかし、module内に定義された変数の値がどのタイミングでどの関数によって変更されるかは注意深くコードを読んでいかないとわかりません。Fortranしか書いたことがない方にとってはこれは当然かもしれませんが、現代ではこのような「グローバル変数」を使うコーディングは読みにくいコードとして知られています。FortranでもFortran 2008以降のオブジェクト指向のコーディングスタイルを用いればモダンな書き方が可能ですが、現状多くのFortran使用者はオブジェクト指向Fortranを使っていません（英語及び日本語でweb検索した際の情報の少なさがそれを示唆しています。個人的にはオブジェクト指向Fortranは結構好きでよく使っており記事も書いていますが、使用者は実感として少ないです）。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"ソースコードは書かれた時間と空間から離れれば離れるほど読みにくくなります。書いた本人が書いた直後であればコードの意図を取ることは簡単で、どんなに読みにくくてもコメントがなくても問題はありません。複数人で開発している場合は書いた人に聞くことでまだコードを理解できます。一方、書いてから10年経ってしまったコードは書いた本人にも意図がわからなくなってしまう場合があります。これを避けるためには、なるべく、書きやすく、読みやすく、メンテナンスしやすい、コードを書く必要があります。Fortranは少数での開発が多かったためかあまりこの視点に立ったコーディングスタイルが広まってきませんでした（気象庁のFortran 標準コーディングルールは有名ですが、今となっては古いと言えるでしょう。現代であればFortranをコーディングする際に気をつけていることが参考になります）。一方、プログラミング業界自体は日進月歩で進歩しているために、この視点に立った多くのノウハウが蓄積されています。一番有名なのはオブジェクト指向における「デザインパターン」でしょうか。 Juliaは2018年にバージョン1になった極めて新しい言語でして、現代のコーディングの良いところをなるべく取り込むようにデザインされています。ですので、Juliaでコードを書くとモダンな読みやすいメンテナンスしやすいコードを書くことができます。","category":"page"},{"location":"#.-古（いにしえ）のFORTRANコードから決別できる（かもしれない）","page":"Fortranから始めるJulia","title":"4. 古（いにしえ）のFORTRANコードから決別できる（かもしれない）","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"2010年代には確実に使われていた古いFORTRANコードを紹介します。そのコードはあるレビュー論文のコード(動的平均場理論の数値計算用のコード)の一部分でして、非線形関数の最小値を求めるコードです。そのコードのコメントに","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"C========+=========+=========+=========+=========+=========+=========+=$\nC PROGRAM: minimize\nC TYPE   : subroutine\nC PURPOSE: conjugent gradient search\nC I/O    : \nC VERSION: 30-Sep-95\nC COMMENT: This is a most reliable conjugent gradient routine! It has\nC          served us well for many years, and is capable to cope with\nC          a very large number of variables. Unfortunately, we don't\nC          know who wrote this routine (original name: 'va10a'), and \nC          we find it very obscure.\nC          Don't worry, it works just fine.\nCnoprint================================================================","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"とあります。1995年の時点で誰が書いたかわからないのですが、よく動く、という理由で2010年代にも使われていました（今でも使われているかもしれません）。このコードはdoループをdo,enddoで閉じるのではく、行番号とcontinue文で制御しており、ループから抜け出したりgotoで移動したりが多発するコードです。確かによく動き、ちゃんとした解を返します。私は一度このコードをFortran90に書き換えようと試みたことがありますが、私には無理でした。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Juliaの場合、このコードを使わなくてもOptimというパッケージを使えば非線形関数の最小値を求めることができます。","category":"page"},{"location":"#追記","page":"Fortranから始めるJulia","title":"追記","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"このコードについて調べてみたところ、ついに元のコードの情報が書かれている文献（R.Fletcherの\"FORTRAN SUBROUTINES FOR MINIMIZATION BY QUASI-NEWTON METHODS\", Research group report(United Kingdom Atomic Energy Authority)）を見つけました。これによると、このコードva10aは1972年の4月に書かれたそうです！","category":"page"},{"location":"#.-Fortranと文法が似ている","page":"Fortranから始めるJulia","title":"5. Fortranと文法が似ている","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"配列の添字が1始まりであるため、Fortranのコードを素朴に移植することが容易です。PythonやCは0始まりですから、それらよりも違和感は少ないと思います。 FortranとJuliaがどのくらい文法が似ているかは後述します。","category":"page"},{"location":"#このウェブサイトの作成者","page":"Fortranから始めるJulia","title":"このウェブサイトの作成者","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"Yuki Nagai, Ph.D","category":"page"},{"location":"#有用な本","page":"Fortranから始めるJulia","title":"有用な本","text":"","category":"section"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"以下の本はJulia言語を理解する上で役に立つと思います。","category":"page"},{"location":"","page":"Fortranから始めるJulia","title":"Fortranから始めるJulia","text":"進藤 裕之, 佐藤 建太, \"1から始めるJuliaプログラミング\", コロナ社(2020) ","category":"page"}]
}
