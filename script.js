// =========================================================================
// ÁREA DE CONFIGURAÇÃO (EDITE DIRETAMENTE OS VALORES ABAIXO)
// =========================================================================
const CONFIG = {
  // Links de contato e identificadores
  whatsappLink: "https://wa.me/5547996927845",
  whatsappNumber: "5547996927845",
  
  instagramLink: "https://www.instagram.com/mrqs.marcely/",
  instagramUsername: "mrqs.marcely",
  
  emailLink: "mailto:marcely.gestaoodonto@outlook.com",
  emailAddress: "marcely.gestaoodonto@outlook.com",
  
  // Caminhos das imagens do projeto
  logoPath: "Logo.png",         // Nome ou caminho do arquivo da logo
  backgroundPath: "fundo.png",   // Nome ou caminho do arquivo de fundo
  whatsappIconPath: "whatsapp.png", // Nome ou caminho do ícone do WhatsApp
  
  // Textos Institucionais
  brandName: "MARCELY MARQUES",
  brandSubtitle: "GESTÃO ESTRATÉGICA"
};

// =========================================================================
// EXECUÇÃO E MAPEAMENTO AUTOMÁTICO (NÃO EDITAR ABAIXO DESTA LINHA)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Atualizar Imagem de Fundo (Background)
  const bioPage = document.querySelector(".bio-page");
  if (bioPage && CONFIG.backgroundPath) {
    bioPage.style.backgroundImage = `url('${CONFIG.backgroundPath}')`;
  }
  
  // 2. Atualizar Logotipo da Marca
  const brandLogo = document.querySelector(".brand-logo");
  if (brandLogo && CONFIG.logoPath) {
    brandLogo.src = CONFIG.logoPath;
    brandLogo.alt = `Logotipo oficial de ${CONFIG.brandName}`;
  }
  
  // 3. Atualizar Ícone do WhatsApp se for imagem
  const whatsappIcon = document.querySelector(".btn-icon-png");
  if (whatsappIcon && CONFIG.whatsappIconPath) {
    whatsappIcon.src = CONFIG.whatsappIconPath;
  }
  
  // 4. Configurar Link do WhatsApp
  const whatsappEl = document.getElementById("link-whatsapp");
  if (whatsappEl) {
    whatsappEl.href = CONFIG.whatsappLink;
    whatsappEl.setAttribute("aria-label", `Falar com ${CONFIG.brandName} pelo WhatsApp - número ${CONFIG.whatsappNumber}`);
  }
  
  // 5. Configurar Link do Instagram
  const instagramEl = document.getElementById("link-instagram");
  if (instagramEl) {
    instagramEl.href = CONFIG.instagramLink;
    instagramEl.setAttribute("aria-label", `Acessar o perfil de Instagram @${CONFIG.instagramUsername}`);
  }
  
  // 6. Configurar Link de E-mail
  const emailEl = document.getElementById("link-email");
  if (emailEl) {
    emailEl.href = CONFIG.emailLink;
    emailEl.setAttribute("aria-label", `Enviar um e-mail para ${CONFIG.emailAddress}`);
  }
});
