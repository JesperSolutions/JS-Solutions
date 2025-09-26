# ZENOVA Tech - Preview Deployment Workflow

## 🚀 Quick Setup

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Every PR automatically gets a preview URL: `https://pr-123-zenova-tech.vercel.app`
3. AI can access and review live changes instantly

### Firebase Hosting Preview Channels
```bash
# Deploy to preview channel
npm run deploy:preview

# Or manually
firebase hosting:channel:deploy preview-$(git rev-parse --short HEAD)
```

## 📋 PR Template

Add this to your PR template:

```markdown
## 🔗 Preview URLs
- **Vercel Preview**: [Deploy Preview](https://pr-{PR_NUMBER}-zenova-tech.vercel.app)
- **Firebase Preview**: [Firebase Preview](https://zenova-tech--preview-{COMMIT_HASH}.web.app)

## 🎯 Changes Made
- [ ] List your changes here
- [ ] Include screenshots if UI changes
- [ ] Test on mobile/desktop

## 🧪 Testing Checklist
- [ ] All pages load correctly
- [ ] Forms work as expected
- [ ] Mobile responsive
- [ ] Performance metrics acceptable
```

## 🤖 AI Integration

The AI can now:
1. **See live changes** - Access preview URLs to verify implementations
2. **Debug visually** - Spot design issues in real-time
3. **Test interactions** - Verify form validation, navigation, etc.
4. **Performance check** - Run Lighthouse audits on preview URLs

## 🔧 Commands

```bash
# Deploy to production
npm run deploy

# Deploy to preview channel
npm run deploy:preview

# Local development
npm run dev
```

## 📊 Benefits

- **Instant feedback** - See changes immediately
- **Better debugging** - Visual confirmation of fixes
- **Collaboration** - Share URLs with stakeholders
- **AI assistance** - AI can verify and suggest improvements
