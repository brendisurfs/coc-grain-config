if exists("b:current_syntax")
  finish
endif

" syntax
syntax keyword grainKeyword let record type enum if else
syntax keyword grainFunction print toString

" Operators
syntax match grainOperator "\v/"
syntax match grainOperator "\v-"
syntax match grainOperator "\v\+"
syntax match grainOperator "\v\?"
syntax match grainOperator "\v\="
syntax match grainOperator "\v\*"
syntax match grainOperator "\v-\="
syntax match grainOperator "\v\*\="
syntax match grainOperator "\v\+\="

" Strings
syntax region grainString start=/\v"/ skip=/\v\\./ end=/\v"/

" Comments
syntax match grainComment "\v//.*$"

" variable
" NOTE: this does not work.
" syntax region grainIdentifier start="(?<=let).*" end="(?==)"
"

" linking
highlight link grainString String
highlight link grainKeyword Keyword
highlight link grainOperator Operator
highlight link grainFunction Function
" highlight link grainIdentifier Identifier

let b:current_syntax = "grain"
