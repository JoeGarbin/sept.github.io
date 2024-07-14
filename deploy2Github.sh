# 部署到github pages

# 打包
pnpm run build

# 切换分支
git checkout githubPages

# sleep
sleep 3

# 删除旧文件
rm -rf ./sept/*

# 复制新文件
cp -r dist/* sept/

# 提交
git add .
git commit -m "deploy"

# 推送
git push origin githubPages

# 切换回主分支
git checkout -