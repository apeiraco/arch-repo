setup:
    mise install
    cd docs && pnpm i
dev-docs:
    cd docs && pnpm run dev