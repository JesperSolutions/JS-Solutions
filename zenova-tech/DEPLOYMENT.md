# 🚀 Zenova Tech - Deployment Guide

## 🌐 Live URLs

- **Production**: https://zenova-tech.web.app
- **Firebase Console**: https://console.firebase.google.com/project/jesper-aggerholm-site/overview

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment Commands

### Manual Deployments

```bash
# Deploy to production
npm run deploy

# Deploy preview channel
npm run deploy:preview

# Deploy to Vercel (alternative)
npm run deploy:vercel
```

### Automatic Deployments (GitHub Actions)

The project is configured with GitHub Actions for automatic deployments:

#### 🔄 Pull Request Deployments
- **Trigger**: Every PR automatically creates a preview
- **URL Format**: `https://zenova-tech--pr-{PR_NUMBER}.web.app`
- **Features**: 
  - Automatic preview URL comments on PRs
  - Build validation before merge
  - Canvas particle field testing

#### 🎯 Production Deployments
- **Trigger**: Push to `main` branch
- **URL**: https://zenova-tech.web.app
- **Features**:
  - Automatic production deployment
  - Build success notifications
  - Zero-downtime deployments

## 🛠️ Setup Requirements

### Firebase Configuration

1. **Firebase Project**: `jesper-aggerholm-site`
2. **Service Account**: Required for GitHub Actions
3. **Hosting**: Configured for React SPA

### GitHub Secrets Required

Set these secrets in your GitHub repository settings:

```
FIREBASE_SERVICE_ACCOUNT
```

To get the service account:
```bash
# Generate service account key
firebase projects:list
firebase iam:service-accounts:create github-actions --project jesper-aggerholm-site
firebase iam:service-accounts:keys:create github-actions-key.json --iam-account github-actions@jesper-aggerholm-site.iam.gserviceaccount.com --project jesper-aggerholm-site
```

## 🎨 Current Features Deployed

### ✨ Canvas Particle Field
- **140 Particles**: Time-based, damped motion
- **Zen-Garden Calm**: Speed-limited, smooth animation
- **Floating Service Tags**: 12 expertise areas with gentle drift
- **Japanese Aesthetic**: Deep indigo gradient with plum accents
- **Performance**: 60fps, frame-rate independent

### 🎯 Technical Specs
- **Bundle Size**: ~371KB gzipped
- **Performance**: Optimized Canvas rendering
- **Accessibility**: Respects `prefers-reduced-motion`
- **Responsive**: Auto-resizes with ResizeObserver

## 🔍 Monitoring & Debugging

### Firebase Hosting
- **Analytics**: Available in Firebase Console
- **Performance**: Core Web Vitals monitoring
- **Error Tracking**: Automatic error reporting

### GitHub Actions
- **Workflow Runs**: Check Actions tab for deployment status
- **Logs**: Detailed build and deployment logs
- **Notifications**: Automatic PR comments with preview URLs

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Deployment Failures**
   - Check Firebase service account permissions
   - Verify GitHub secrets are set correctly
   - Review GitHub Actions logs

3. **Canvas Performance**
   - Check browser DevTools for frame rate
   - Verify `prefers-reduced-motion` support
   - Test on different devices

### Performance Optimization

- **Bundle Analysis**: `npm run build` shows bundle sizes
- **Canvas Optimization**: Particles use efficient rendering
- **Image Optimization**: WebP support with fallbacks
- **Code Splitting**: Lazy-loaded pages reduce initial bundle

## 📈 Next Steps

### Potential Enhancements
- [ ] Add performance monitoring (Web Vitals)
- [ ] Implement error boundaries
- [ ] Add mobile touch interactions
- [ ] Set up analytics tracking
- [ ] Add A/B testing capabilities

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerting
- [ ] Track user engagement metrics
- [ ] Monitor Core Web Vitals

---

**Last Updated**: January 2025  
**Deployment Status**: ✅ Production Ready  
**Canvas Particle Field**: 🧘 Zen-Garden Calm Active
