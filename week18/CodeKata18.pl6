#!/usr/bin/env perl6

sub MAIN(Int $n where 1E9 >= * >= 1) {
    say getReverseBinaryNumbers($n);
}

sub getReverseBinaryNumbers($x) {
    return :2($x.base(2).flip);
}
