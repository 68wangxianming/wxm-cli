cd ./tests/unit
check_file=`ls | grep ".spec.tsx" | tr -s "\n" " "`
#echo $check_file
#jest --coverage --findRelatedTests $check_file
jest --findRelatedTests $check_file
