# 🚚 Apeiraco Arch-Repo

> _一个全自动化的个人 Arch Linux 软件库（理念类似 Scoop-Bucket）_

本仓库作为一个自定义的 Pacman 软件源运行，专注于自动化维护 AUR 中收录不及时或不便维护的预编译二进制软件与开发者工具。

[![Auto Update Packages](https://github.com/apeiraco/arch-repo/actions/workflows/update.yml/badge.svg)](https://github.com/apeiraco/arch-repo/actions/workflows/update.yml)
[![Build and Publish Packages](https://github.com/apeiraco/arch-repo/actions/workflows/build-and-publish.yml/badge.svg)](https://github.com/apeiraco/arch-repo/actions/workflows/build-and-publish.yml)
[![License](https://img.shields.io/badge/license-Unlicense-blue)](LICENSE)

**[🇬🇧 English](README.md)**

---

## 📦 软件目录

### 💻 开发者工具

| 软件 | 描述 |
| --- | --- |
| **[openvscode-server-bin](https://github.com/gitpod-io/openvscode-server)** | 在远程服务器上运行上游原生的 VS Code，并通过现代浏览器进行访问。 |

---

## 🚀 快速开始

### 添加软件源

在你的 `/etc/pacman.conf` 文件末尾追加以下配置：

```ini
[apeiraco]
SigLevel = Optional TrustAll
Server = https://arch-repo.apeiraco.com/$arch
```

### 刷新并安装

```bash
# 更新数据库
sudo pacman -Sy

# 安装所需软件
sudo pacman -S openvscode-server-bin
```

---

## 🤝 参与贡献

本仓库高度依赖 GitHub Actions、`nvchecker` 与 `updpkgsums` 实现无人工干预的自动更新。如果你想添加新软件：

1. **自动化优先**：新软件包必须包含标准的 `PKGBUILD`，并在 `.nvchecker.toml` 中添加对应条目以支持自动更新检查。
2. **遵循上游**：预编译软件请加上 `-bin` 后缀。如果官方提供了 `aarch64` 等 ARM 架构，请务必在 `PKGBUILD` 中动态支持。
3. **Opt 安装**：对于类似 `openvscode-server-bin` 这类体积庞大的第三方预编译包，请解压到 `/opt/<pkgname>` 下，并向 `/usr/bin/` 建立软链接。
4. **用户级服务**：对于开发环境的后台程序，强烈推荐提供 Systemd 用户级服务（`/usr/lib/systemd/user/*.service`），避免滥用系统全局级服务。

详细的 Agent 指令与贡献规范，请参阅 [AGENTS.md](AGENTS.md)。

---

## 📄 许可证

[The Unlicense](LICENSE) - 公共领域

**注意：** 本仓库中具体软件的许可证以上游仓库为准，请参考各软件原始项目的许可证声明。
