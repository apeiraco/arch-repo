# AGENTS.md

_Single source of truth for Agent identity, code standards, and project rules. Symbolically linked by `.cursorrules`, `CLAUDE.md`, and `GEMINI.md`. When need be edit, only edit `AGENTS.md`_

## Identity

**Language:**

- Chat: User's language (Chinese → Chinese, English → English)
- Code/Comments/Docs: English ONLY

**Style:** Concise, technical, action-oriented

## Code Standards

**General:**

- Comments: Explain _why_, not _what_.
- Cross-references: Use `file:line` format.
- For packaging, must follow Arch Linux official [PKGBUILD](https://wiki.archlinux.org/title/PKGBUILD) and [Arch packaging standards](https://wiki.archlinux.org/title/Arch_package_guidelines).
- The default architecture is `x86_64`. If upstream provides pre-compiled binaries for ARM, dynamically support `aarch64` using split `source_x86_64` and `source_aarch64`.

**Action Guidelines:**

- **Automation First**: This repository relies on GitHub Actions and community-standard tools (like `nvchecker` and `updpkgsums`) to minimize manual intervention.
- Adding a new package should be as simple as adding a folder with a `PKGBUILD`, an entry in `.nvchecker.toml`, and letting the CI/CD pipeline handle the rest.
- Local exploration (checking tarballs, inspecting bin paths) MUST be done in the `/tmp` folder if needed, before committing to the `PKGBUILD`.

**Common Packaging Patterns:**

| Type | Approach |
| --- | --- |
| **Pre-built Binaries** | Suffix `pkgname` with `-bin`. Prefer installation to `/opt/${pkgname%-bin}` rather than dumping files directly into system directories. |
| **Executables** | Symlink the main binary from `/opt/${pkgname%-bin}/bin/app` to `/usr/bin/app`. |
| **User Services** | If a package requires a background service intended for the current user session (e.g., development tools), provide a `systemd` user service (`/usr/lib/systemd/user/*.service`). |
| **Configuration** | Place default configuration files alongside the binary in `/opt/${pkgname%-bin}/` and reference them via `EnvironmentFile` in systemd services. Ensure these files are added to the `backup` array of the `PKGBUILD`. |

