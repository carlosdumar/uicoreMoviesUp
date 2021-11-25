files="";

for var in "$@"
do
    files="$files \"$var\","
done

str="{
  \"extends\": \"./tsconfig.json\",
  \"include\": [\"src/global.d.ts\", $files]
}"
echo $str > tsconfig.tmp

tsc -p ./tsconfig.tmp

code=$?

rm ./tsconfig.tmp

exit $code