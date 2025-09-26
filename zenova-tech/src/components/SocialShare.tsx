import React from 'react';
import { Share2, Twitter, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  url = window.location.href, 
  title = document.title,
  description = "Check out this article from Zenova Tech",
  className = ''
}) => {
  const [copied, setCopied] = React.useState(false);

  const shareData = {
    title,
    text: description,
    url
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        trackEvent('social_share', {
          method: 'native',
          platform: 'native',
          url,
          title
        });
      } catch (error) {
        console.log('Native sharing cancelled or failed');
      }
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=zenova_tech`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    trackEvent('social_share', {
      method: 'twitter',
      platform: 'twitter',
      url,
      title
    });
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
    trackEvent('social_share', {
      method: 'linkedin',
      platform: 'linkedin',
      url,
      title
    });
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Check out: ${title}`);
    const body = encodeURIComponent(`${description}\n\n${url}`);
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = emailUrl;
    trackEvent('social_share', {
      method: 'email',
      platform: 'email',
      url,
      title
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackEvent('social_share', {
        method: 'copy',
        platform: 'copy',
        url,
        title
      });
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <div className={`social-share ${className}`}>
      <div className="share-label">Share this article:</div>
      
      <div className="share-buttons">
        {/* Native share button (mobile) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="share-button native"
            aria-label="Share using native sharing"
            title="Share"
          >
            <Share2 size={18} />
          </button>
        )}

        {/* Twitter */}
        <button
          onClick={handleTwitterShare}
          className="share-button twitter"
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <Twitter size={18} />
        </button>

        {/* LinkedIn */}
        <button
          onClick={handleLinkedInShare}
          className="share-button linkedin"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </button>

        {/* Email */}
        <button
          onClick={handleEmailShare}
          className="share-button email"
          aria-label="Share via email"
          title="Share via email"
        >
          <Mail size={18} />
        </button>

        {/* Copy link */}
        <button
          onClick={handleCopyLink}
          className={`share-button copy ${copied ? 'copied' : ''}`}
          aria-label="Copy link"
          title={copied ? 'Link copied!' : 'Copy link'}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
