import React, { useState, useRef } from 'react';
import * as styles from './style.css';
import { Pencil, Plus, X } from 'lucide-react';
import Cropper from 'react-easy-crop';

const ProfilePictureEditor = ({ mode }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const generateCroppedImage = async () => {
    const image = new Image();
    image.src = imageSrc;
    return new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const { width, height, x, y } = croppedArea;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(
          image,
          x,
          y,
          width,
          height,
          0,
          0,
          canvas.width,
          canvas.height
        );

        canvas.toBlob((blob) => {
          const croppedImageUrl = URL.createObjectURL(blob);
          resolve(croppedImageUrl);
        }, 'image/jpeg');
      };
    });
  };

  const finalizeCrop = async () => {
    const croppedImg = await generateCroppedImage();
    setCroppedImage(croppedImg);
    setImageSrc(null);
  };

  return (
    <div className={styles.imgContainer}>
      <div style={{ position: 'relative', display: 'flex' }}>
        {croppedImage && (
          <div
            className={styles.clearButton}
            onClick={() => {
              setCroppedImage(null);
              setImageSrc(null);
            }}
          >
            <X size={18} className={styles.icon} />
          </div>
        )}
        <div className={styles.avatar}>
          {croppedImage ? (
            <img
              src={croppedImage}
              alt="Cropped Avatar"
              className={styles.croppedImage}
            />
          ) : (
            <div
              className={styles.plusButton}
              onClick={triggerFileInput}
            >
              {mode === 'Add' ? <Plus size={18} /> : <Pencil size={18} />}
            </div>
          )}
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {imageSrc && (
        <div className={styles.cropContainer}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            cropShape="round"
            aspect={1}
            onCropChange={setCrop} 
            onCropComplete={handleCropComplete}
            onZoomChange={setZoom}
          />
          <div className={styles.cropControls}>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
              className={styles.zoomSlider}
            />
          </div>
        </div>
      )}

      <div className={styles.btnContainer}>
        {imageSrc ? (
          <button onClick={finalizeCrop} className={styles.saveButton}>
            Crop
          </button>
        ) : (
          <button onClick={triggerFileInput} className={styles.saveButton}>
            Upload Photo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureEditor;
