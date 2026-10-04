import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, MapPin } from "lucide-react";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          width: "100%",
          padding: "45px 30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.96)",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* ICON */}
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff3e0",
          }}
        >
          <MapPin
            size={42}
            strokeWidth={2}
            color="#f57c00"
          />
        </div>

        {/* 404 */}
        <h1
          style={{
            margin: "0",
            fontSize: "72px",
            fontWeight: "800",
            lineHeight: "1",
            color: "#f57c00",
          }}
        >
          404
        </h1>

        {/* TITLE */}
        <h2
          style={{
            margin: "18px 0 10px",
            fontSize: "30px",
            fontWeight: "700",
            color: "#222",
          }}
        >
          Page Not Found
        </h2>

        {/* MESSAGE */}
        <p
          style={{
            margin: "0 auto 30px",
            maxWidth: "500px",
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#666",
          }}
        >
          Oops! Looks like you've taken a wrong turn.
          <br />
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {/* GO HOME */}
          <button
            type="button"
            onClick={handleGoHome}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              background: "#f57c00",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            <Home size={18} />
            Go Home
          </button>

          {/* GO BACK */}
          <button
            type="button"
            onClick={handleGoBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 22px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              color: "#444",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* BRANDING */}
        <p
          style={{
            marginTop: "30px",
            marginBottom: "0",
            fontSize: "14px",
            fontWeight: "600",
            color: "#888",
          }}
        >
          Happy Mappy ✈️ — Your journey starts here
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;