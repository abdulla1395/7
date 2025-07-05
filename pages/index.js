export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>مرحبا بك في قولها</h1>
      <p>منصة توليد شخصيات عربية تتكلم باللهجات المحلية</p>

      {/* صورة الشخصية */}
      <img
        src="/character_image.jpg"
        alt="شخصية عربية"
        style={{ maxWidth: "300px", borderRadius: "10px", marginTop: "30px" }}
      />

      {/* مشغل الصوت */}
      <div style={{ marginTop: "30px" }}>
        <h3>🔊 استمع للهجة السعودية:</h3>
        <audio controls>
          <source src="/voiceover_saudi.mp3" type="audio/mpeg" />
          المتصفح لا يدعم تشغيل الصوت.
        </audio>
      </div>

      {/* الفيديو */}
      <div style={{ marginTop: "30px" }}>
        <h3>🎥 مثال حي للشخصية:</h3>
        <video controls width="300">
          <source src="/video_preview.mp4" type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>
      </div>
    </div>
  );
}
