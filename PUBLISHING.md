# Publishing & Usage Guide

This guide covers how to publish this React component library to GitHub Packages and use it in other projects.

---

## Part 1: Create GitHub Repository

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Create a New GitHub Repository
1. Go to https://github.com/new
2. Repository name: `templateversioncontrolf` (or your preferred name)
3. Set to **Private** (recommended for internal packages)
4. **Do NOT** initialize with README (you already have files)
5. Click "Create repository"

### 3. Connect Local to Remote
```bash
git remote add origin https://github.com/DivyanshGreenstep/templateVersionControlF.git
git branch -M main
git add .
git commit -m "Initial commit: React button component library"
git push -u origin main
```

---

## Part 2: Setup GitHub Packages Authentication

### 1. Create a Personal Access Token (PAT)
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it `github-packages-publish`
4. Select scopes:
   - `write:packages`
   - `read:packages`
   - `repo` (for private repos)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### 2. Configure npm to use GitHub Packages
```bash
npm config set //npm.pkg.github.com/:_authToken YOUR_PAT_HERE
npm config set @DivyanshGreenstep:registry https://npm.pkg.github.com
```

Or create/edit `~/.npmrc`:
```
//npm.pkg.github.com/:_authToken=YOUR_PAT_HERE
@DivyanshGreenstep:registry=https://npm.pkg.github.com
```

---

## Part 3: Update package.json

Make sure your `package.json` has the correct configuration:

```json
{
  "name": "@DivyanshGreenstep/templateversioncontrolf",
  "version": "1.0.0",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DivyanshGreenstep/templateVersionControlF.git"
  }
}
```

---

## Part 4: Build & Publish

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Package
```bash
npm run build
```

This creates:
- `dist/index.js` (CommonJS)
- `dist/index.esm.js` (ES Modules)
- `dist/styles.css` (Extracted CSS)
- `dist/index.d.ts` (TypeScript types)

### 3. Publish to GitHub Packages
```bash
npm publish
```

### 4. Verify Package
Visit: `https://github.com/DivyanshGreenstep?tab=packages`

---

## Part 5: Use in Other Projects

### Option A: Install via npm

#### 1. Configure Consumer Project
Create/edit `.npmrc` in the consumer project:
```
@DivyanshGreenstep:registry=https://npm.pkg.github.com
```

#### 2. Install the Package
```bash
npm install @DivyanshGreenstep/templateversioncontrolf
```

#### 3. Import & Use
```tsx
import { Button, Showcase } from '@DivyanshGreenstep/templateversioncontrolf';
import '@DivyanshGreenstep/templateversioncontrolf/dist/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Showcase />
    </div>
  );
}
```

---

### Option B: Use via Git URL (No Auth Needed)

```bash
npm install https://github.com/DivyanshGreenstep/templateVersionControlF.git
```

Or add to `package.json`:
```json
{
  "dependencies": {
    "templateversioncontrolf": "github:DivyanshGreenstep/templateVersionControlF"
  }
}
```

---

## Part 6: Development Workflow

### Local Development
```bash
# Run dev server to test components
npm run dev
```

### Making Updates
1. Make changes to components
2. Update version in `package.json`:
   - `1.0.0` → `1.0.1` (patch)
   - `1.0.0` → `1.1.0` (minor)
   - `1.0.0` → `2.0.0` (major)
3. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

### Updating in Consumer Projects
```bash
npm update @DivyanshGreenstep/templateversioncontrolf
```

---

## Part 7: Troubleshooting

### "401 Unauthorized" Error
- Check your PAT has `write:packages` scope
- Verify `.npmrc` has correct token
- Try logging out and back in: `npm logout --registry=https://npm.pkg.github.com`

### "Cannot find module" Error
- Ensure consumer project has `.npmrc` pointing to GitHub registry
- Check package name matches published scope

### Styles Not Loading
- Make sure to import the CSS: `import '@DivyanshGreenstep/templateversioncontrolf/dist/styles.css'`
- Check build output includes `dist/styles.css`

### TypeScript Errors
- Verify `dist/index.d.ts` was generated during build
- Check `tsconfig.json` in consumer project includes proper module resolution

---

## File Structure After Build

```
templateversioncontrolf/
├── dist/
│   ├── index.js         # CommonJS bundle
│   ├── index.esm.js     # ES Module bundle
│   ├── index.d.ts       # TypeScript declarations
│   └── styles.css       # Extracted CSS
├── src/
│   ├── Button.tsx
│   ├── Showcase.tsx
│   ├── index.ts         # Main exports
│   ├── styles.css
│   └── dev.tsx          # Dev playground
├── package.json
├── tsconfig.json
└── rollup.config.js
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm publish` | Publish to GitHub Packages |
| `npm run preview` | Preview production build |

---

## Support

For issues or questions:
- Check the GitHub repository issues
- Review GitHub Packages documentation: https://docs.github.com/en/packages
