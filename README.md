# 🚚 Apeiraco Arch-Repo

> _A personal, fully-automated Arch Linux user repository (similar to a "scoop-bucket")._

This repository serves as a custom Pacman repository, focusing on automatically maintaining software that is not readily available or frequently updated in the AUR, such as pre-compiled developer tools and binaries.

<p class="badges">
  <a href="https://github.com/apeiraco/arch-repo/actions/workflows/update.yml"><img src="https://github.com/apeiraco/arch-repo/actions/workflows/update.yml/badge.svg" alt="Auto Update Packages"></a>
  <a href="https://github.com/apeiraco/arch-repo/actions/workflows/build-and-publish.yml"><img src="https://github.com/apeiraco/arch-repo/actions/workflows/build-and-publish.yml/badge.svg" alt="Build and Publish Packages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Unlicense-blue" alt="License"></a>
</p>

<div class="github-only">

**[🇨🇳 简体中文](README_CN.md)**

</div>

## 📦 Package Directory

### 💻 Developer Tools

| Package | Description |
| --- | --- |
| **[openvscode-server-bin](https://github.com/gitpod-io/openvscode-server)** | Run upstream VS Code on a remote machine with access through a modern web browser. |

## 🚀 Quick Start

### Add Repository

Append the following configuration to your `/etc/pacman.conf`:

```ini
[apeiraco]
SigLevel = Optional TrustAll
Server = https://arch-repo.apeiraco.com/$arch
```

### Sync and Install

```bash
# Update repository databases
sudo pacman -Sy

# Install a package
sudo pacman -S openvscode-server-bin
```

## 🤝 Contribution Guidelines

This repository relies on GitHub Actions, `nvchecker`, and `updpkgsums` to minimize manual intervention. If you want to contribute or add new packages:

1. **Automation First**: New packages must have a proper `PKGBUILD` and an entry in `.nvchecker.toml` for automatic updates.
2. **Upstream Alignment**: Suffix pre-compiled binaries with `-bin`. Support `x86_64` and `aarch64` when upstream provides them.
3. **Opt Installation**: Large binary blobs (like `openvscode-server-bin`) should be installed to `/opt/<pkgname>` with symlinks to `/usr/bin/`.
4. **User Services**: Prefer `systemd` user services (`/usr/lib/systemd/user/*.service`) for background development tools instead of system-wide services.

For detailed Agent or contributor instructions, please read [AGENTS.md](AGENTS.md).

## 📄 License

[The Unlicense](LICENSE) - Public Domain

**Note:** The license of the software provided in this repository is subject to the upstream repositories. Please refer to the license declarations of the original projects.
