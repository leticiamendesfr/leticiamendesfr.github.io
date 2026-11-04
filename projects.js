// Conteúdo dos projetos e evidências disponíveis.
const publishedMedia = {
  "clickbus-1": "clickbus-dashboard.png",
  "clickbus-2": "clickbus-grafana.png",
  "maestro-1": "maestro-artifacts.jpg",
  "maestro-2": "maestro-architecture.svg",
  "operacao-1": "operacao-architecture.svg",
  "operacao-2": "conferencia-validation.svg",
  "hostel-1": "hostel-architecture.svg",
  "hostel-2": "hostel-script-structure.svg"
};

const projects = {
  "clickbus": {
    "title": "ClickBus / Data Flow",
    "category": "Ciência de dados & ML",
    "type": "Enterprise Challenge (FIAP + ClickBus)",
    "status": "Concluído",
    "context": "E-commerce de Viagens / Inteligência de Clientes",
    "intro": "Pipeline ponta a ponta de inteligência de clientes com 800k+ registros: segmentação RFM, coortes de retenção e modelos preditivos de recompra e rotas.",
    "tags": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "PostgreSQL",
      "pgvector",
      "Grafana"
    ],
    "sections": [
      [
        "O Desafio de Negócio",
        "Desenvolvido no Enterprise Challenge da FIAP em parceria com a ClickBus sobre uma base real de mais de 800 mil registros de compras e viagens. O objetivo foi resolver três desafios críticos de Growth: decodificar o comportamento do consumidor, prever o momento exato de recompra e antecipar as rotas de maior probabilidade."
      ],
      [
        "Segmentação Avançada de Clientes (RFM & Coorte)",
        "Combinação de recência, frequência e valor monetário (RFM) com matrizes de coorte para identificar grupos estratégicos de alto valor ('Campeões', 'VIPs sazonais', 'Em Risco'). A solução permite que o time de CRM e Marketing estruture réguas de comunicação e ofertas altamente personalizadas."
      ],
      [
        "Modelagem Preditiva & Machine Learning",
        "Treinamento de modelos de classificação supervisionada (HistGradientBoostingClassifier) para estimar a propensão de recompra em janelas de 7 e 30 dias (classificação binária) e recomendação preditiva da próxima rota (classificação multiclasse), além de regressão para estimar dias até a próxima viagem."
      ],
      [
        "Arquitetura de Dados & Visualização",
        "Pipeline completo: engenharia de features em Python/Pandas, modelagem com Scikit-learn, persistência em PostgreSQL e camada de busca vetorial com pgvector e OpenAI Embeddings. A visualização executiva foi centralizada em dashboards dinâmicos no Grafana."
      ]
    ],
    "diagram": "clickbus-architecture.svg",
    "diagramCaption": "Arquitetura da solução: ingestão de dados brutos, engenharia de features, treinamento de modelos preditivos, persistência em banco relacional/vetorial e visualização analítica.",
    "architecture": [
      [
        "Ingestão & ETL",
        "Tratamento e limpeza de mais de 800 mil transações de passagens rodoviárias, tratando sazonalidade e dados faltantes."
      ],
      [
        "Feature Engineering & ML",
        "Criação de métricas de RFM, coortes e treinamento de modelos com Scikit-learn para predição de recompra e rotas."
      ],
      [
        "Camada de Dados",
        "PostgreSQL para armazenamento estruturado e pgvector para indexação e consultas semânticas."
      ],
      [
        "Visualização & Insights",
        "Dashboards analíticos no Grafana com acompanhamento de KPIs de retenção, ticket médio e clusters de clientes."
      ]
    ],
    "gallery": [
      "Dashboard: perfis RFM, matriz de coorte e migração entre segmentos",
      "Modelagem preditiva: probabilidades de recompra em 7/30 dias e rotas sugeridas"
    ],
    "link": "https://github.com/leticiamendesfr/desafio-clickbus-dataflow",
    "linkText": "Ver repositório no GitHub",
    "note": "Projeto desenvolvido em grupo no Enterprise Challenge da FIAP em parceria com a ClickBus.",
    "decisions": [
      [
        "RFM e Análise de Coorte",
        "Mapear a saúde da base e o ciclo de vida do cliente em vez de olhar apenas para o faturamento bruto isolado."
      ],
      [
        "Janelas Temporais de 7 e 30 dias",
        "Definição de horizontes acionáveis para campanhas de reengajamento antes que o cliente esfrie."
      ],
      [
        "Grafana para Decisão Executiva",
        "Centralização visual dos dados para permitir rápida tomada de decisão pelos times de negócio e marketing."
      ]
    ],
    "validation": [
      [
        "Base de Dados Real",
        "Validação com mais de 800 mil transações e comportamentos de compra da ClickBus."
      ],
      [
        "Métricas de Modelagem",
        "Avaliação de modelos supervisionados com separação criteriosa de bases de treino/teste e ajuste de hiperparâmetros."
      ]
    ],
    "resources": [
      [
        "Repositório no GitHub",
        "https://github.com/leticiamendesfr/desafio-clickbus-dataflow"
      ],
      [
        "Abrir Dashboard de Segmentação",
        "clickbus-dashboard.png"
      ],
      [
        "Abrir Painel Preditivo",
        "clickbus-grafana.png"
      ]
    ],
    "brief": {
      "problem": "Como decodificar o comportamento de compra de passageiros e prever a próxima viagem para guiar ações de Growth?",
      "delivery": "Pipeline de segmentação RFM, análise de coortes, modelos preditivos de recompra e rotas com visualização em Grafana.",
      "focus": "Engenharia de features → Machine Learning supervisionado → Dashboards de negócio",
      "learning": "Traduzir grandes volumes de dados transacionais em modelos preditivos que orientam decisões reais de retenção e produto."
    }
  },

  "maestro": {
    "title": "Automação Assistida de Dados e Operações",
    "category": "Automação & Aplicação",
    "type": "Sistema de Automação Assistida",
    "status": "Em operação local",
    "context": "Automação de Rotinas e Dados Operacionais",
    "intro": "Sistema de Automação Assistida de Dados e Operações: extração do Drive, varredura de duplicatas/nulos, conformidade com LGPD, geração automática de planilhas/laudos e automação web com Playwright.",
    "tags": [
      "Node.js",
      "JavaScript",
      "Playwright",
      "Google Drive API",
      "LGPD & Privacy",
      "XLSX / PDFKit",
      "OmniRoute"
    ],
    "sections": [
      [
        "O que o sistema automatiza",
        "Este projeto foi desenvolvido como um Sistema de Automação Assistida de Dados e Operações projetado para eliminar gargalos manuais e transformar fluxos operacionais lentos em rotinas ágeis, seguras e rastreáveis."
      ],
      [
        "1. Extração e Leitura no Google Drive",
        "Integração automatizada com a API do Google Workspace para download, leitura e extração programática de arquivos e planilhas diretamente da nuvem, eliminando uploads manuais."
      ],
      [
        "2. Varredura Estrutural de Dados",
        "Inspeção automática de colunas em bases de até 50 mil linhas, detectando instantaneamente campos nulos, formatos inconsistentes e registros duplicados sem risco de falha humana."
      ],
      [
        "3. Limpeza de Dados Pessoais (LGPD)",
        "Mecanismo de conformidade e governança que identifica, limpa e mascara dados pessoais e sensíveis antes de qualquer processamento ou exportação, garantindo total segurança regulatória."
      ],
      [
        "4. Geração Automática de Planilhas e Laudos PDF",
        "Compilação de resultados e geração automática de planilhas Excel (XLSX) perfeitamente formatadas com totais exatos em centavos inteiros (livre de alucinações matemáticas), além de laudos executivos resumidos em PDF."
      ],
      [
        "5. Navegação Web Autônoma com Playwright",
        "Scripts de navegação com Playwright para acessar sistemas web, validar fontes externas e capturar telas com evidências operacionais de forma 100% automatizada."
      ]
    ],
    "diagram": "maestro-architecture.svg",
    "diagramCaption": "Arquitetura do sistema: integração Google Drive API, pipeline determinístico de higienização e LGPD, navegação Playwright, geração de relatórios XLSX/PDF e IA consultiva.",
    "architecture": [
      [
        "Ingestão & Extração",
        "Conexão com Google Drive API para leitura automática de planilhas e documentos operacionais."
      ],
      [
        "Validação & LGPD",
        "Varredura de nulos, duplicatas e sanitização de dados sensíveis para conformidade legal."
      ],
      [
        "Motor Determinístico",
        "Aritmética exata em centavos inteiros para cálculo de valores financeiros sem alucinação de LLMs."
      ],
      [
        "Automação Web & Entregáveis",
        "Navegação automatizada com Playwright e geração sob demanda de arquivos XLSX e laudos em PDF."
      ]
    ],
    "gallery": [
      "Painel de controle: arquivos processados, pendências mapeadas e laudos gerados",
      "Arquitetura: pipeline de ingestão, validação de regras de negócio e automação"
    ],
    "link": "https://github.com/leticiamendesfr",
    "linkText": "Ver no GitHub",
    "note": "Desenvolvido como ferramenta de automação para acelerar rotinas reais de equipes operacionais e analíticas.",
    "decisions": [
      [
        "Cálculo Determinístico vs. IA Generativa",
        "Usar código estrito e matemática exata em centavos para números financeiros, reservando IA apenas para consultas e síntese de texto."
      ],
      [
        "Tratamento de Privacidade Nativo",
        "Garantir conformidade com a LGPD diretamente no pipeline antes de expor dados a outros módulos ou modelos."
      ],
      [
        "Saídas Prontas para Decisão",
        "Gerar simultaneamente a planilha detalhada para o analista e o laudo em PDF para a liderança."
      ]
    ],
    "validation": [
      [
        "Testes Locais Automatizados",
        "Suíte de testes cobrindo parsing monetário, ausência de campos obrigatórios e geração correta de arquivos XLSX/PDF."
      ],
      [
        "Confiabilidade Operacional",
        "Operação determinística validada com bases reais sem inserção de dados sintéticos substitutos."
      ]
    ],
    "resources": [
      [
        "Abrir Captura da Interface",
        "maestro-artifacts.jpg"
      ],
      [
        "Abrir Diagrama de Arquitetura",
        "maestro-architecture.svg"
      ]
    ],
    "brief": {
      "problem": "Como eliminar o retrabalho manual em rotinas operacionais, conferência de planilhas, conformidade de dados e checagem web?",
      "delivery": "Workstation de automação assistida com leitura no Drive, validação de dados, mascaramento LGPD, automação Playwright e geração de XLSX/PDF.",
      "focus": "Automação assistida → Processamento determinístico → Conformidade LGPD → Entregáveis executivos",
      "learning": "Construir ferramentas robustas que automatizam processos de verdade e resolvem dores operacionais de ponta a ponta."
    }
  },

  "hostel": {
    "title": "Hostel Reels Lab",
    "category": "IA e Conteúdo",
    "type": "Laboratório de IA & Multiagente",
    "status": "Protótipo documentado",
    "context": "Hospitalidade / Inteligência de Conteúdo",
    "intro": "Laboratório de inteligência de conteúdo baseado em agentes de IA: análise de retenção, segmentação de personas de viajantes e geração de roteiros com testes A/B e validação humana.",
    "tags": [
      "Gemini AI",
      "React",
      "TypeScript",
      "Multi-Agent",
      "Prompt Engineering",
      "Human-in-the-Loop"
    ],
    "sections": [
      [
        "O Desafio de Produção de Conteúdo",
        "No setor de hospitalidade (hostels e pousadas), a produção de vídeos curtos (Reels/TikTok) costuma ser descentralizada, demorada e desconectada das taxas de conversão em reservas reais. O objetivo foi criar um sistema capaz de traduzir referências e dados de engajamento em roteiros estratégicos estruturados."
      ],
      [
        "Decodificação de Padrões e Retenção",
        "O sistema analisa vídeos de referência e dados de desempenho para extrair ganchos visuais (hooks), velocidade de cortes, gatilhos de retenção e chamadas para ação (CTAs) de alta eficácia."
      ],
      [
        "Segmentação em 4 Personas de Hóspedes",
        "A IA adapta a mensagem para quatro perfis distintos de viajantes: Mochileiro Econômico (foco em custo-benefício e socialização), Nômade Digital (foco em coworking, Wi-Fi e produtividade), Grupo de Amigos (experiências coletivas e festas) e Viajante Solo (segurança, acolhimento e comunidade)."
      ],
      [
        "Esteira de Testes A/B & Human-in-the-Loop",
        "Para cada ideia, o sistema gera variações controladas de abordagem (A/B) e envia para uma fila de aprovação humana, garantindo que nenhum conteúdo seja publicado sem alinhamento com a identidade e o tom de voz da marca."
      ]
    ],
    "diagram": "hostel-architecture.svg",
    "diagramCaption": "Fluxo do Hostel Reels Lab: ingestão de referências, extração de padrões, orquestração de personas com LLM, testes A/B e fila de revisão humana.",
    "architecture": [
      [
        "Entrada de Referências",
        "Coleta de métricas e estrutura de vídeos de referência do mercado de viagens."
      ],
      [
        "Motor de IA Generativa",
        "Prompts estruturados com Gemini AI para análise de gatilhos de engajamento e retenção."
      ],
      [
        "Orquestração por Personas",
        "Adaptação de roteiros para os 4 perfis de hóspedes com tom de voz personalizado."
      ],
      [
        "Fila de Aprovação (HITL)",
        "Painel interativo para o time revisar, editar e aprovar os roteiros finais."
      ]
    ],
    "gallery": [
      "Arquitetura: fluxo de dados, personas e esteira de aprovação",
      "Estrutura do roteiro: ganchos, desenvolvimento e conversão"
    ],
    "link": "https://github.com/leticiamendesfr",
    "linkText": "Ver no GitHub",
    "note": "Concebido a partir de vivências operacionais no setor de hospitalidade e no ecossistema El Misti.",
    "decisions": [
      [
        "Human-in-the-Loop Obrigatório",
        "Garantir revisão humana editorial antes de qualquer publicação para manter o tom de voz autêntico."
      ],
      [
        "Foco em Personas",
        "Substituir posts genéricos por roteiros direcionados às motivações reais de cada tipo de hóspede."
      ],
      [
        "Testes A/B de Ganchos",
        "Testar diferentes abordagens nos primeiros 3 segundos para maximizar a retenção do público."
      ]
    ],
    "validation": [
      [
        "Engenharia de Prompt Estruturada",
        "Validação de saídas consistentes em JSON e roteiros detalhados cena a cena."
      ],
      [
        "Alinhamento de Marca",
        "Critérios objetivos de tom de voz e conformidade com diretrizes do setor."
      ]
    ],
    "resources": [
      [
        "Abrir Arquitetura do Sistema",
        "hostel-architecture.svg"
      ],
      [
        "Abrir Estrutura de Roteiro",
        "hostel-script-structure.svg"
      ]
    ],
    "brief": {
      "problem": "Como criar roteiros de vídeos curtos de forma rápida, estruturada e conectada aos perfis reais de hóspedes?",
      "delivery": "Laboratório de IA para decodificação de ganchos, segmentação por 4 personas e geração de roteiros com testes A/B e aprovação humana.",
      "focus": "IA Generativa → Engenharia de Prompt → Segmentação por Personas → Human-in-the-Loop",
      "learning": "Usar agentes de IA para transformar referências criativas em um processo de produção repetível e mensurável."
    }
  },

  "operacao": {
    "title": "Fluxos de Conferência Operacional",
    "category": "Automação & Processos",
    "type": "Automação de Rotinas",
    "status": "Em validação operacional",
    "context": "Operações Financeiras / Conciliação",
    "intro": "Automações desenvolvidas para eliminar conferências manuais diárias em caixas, controle de ingressos e recebíveis de cartão, apontando divergências instantaneamente.",
    "tags": [
      "Apps Script",
      "JavaScript",
      "Google Sheets",
      "Webhooks",
      "Conciliação Financeira"
    ],
    "sections": [
      [
        "O Gargalo Operacional",
        "Rotinas diárias de conferência manual de comprovantes de cartão, ingressos e movimentações de caixas consomem horas de gestores e aumentam o risco de erros de digitação e fechamentos divergentes."
      ],
      [
        "Automação e Validação de Regras",
        "Scripts modulares que realizam o cruzamento programático entre os registros operacionais e os valores consolidados, conferindo taxas, turnos e lançamentos com validação lógica imediata."
      ],
      [
        "Triagem de Pendências em Tempo Real",
        "Identificação automática de registros sem correspondência, valores fora da tolerância ou notas pendentes, gerando painéis visuais com semáforos de alerta para ação rápida do time."
      ],
      [
        "Ganhos de Tempo e Confiabilidade",
        "Redução do tempo de conferência diária de horas para poucos minutos, permitindo que a equipe foque no atendimento e em decisões operacionais estratégicas."
      ]
    ],
    "diagram": "operacao-architecture.svg",
    "diagramCaption": "Arquitetura dos fluxos: captação de registros brutos, cruzamento com regras de negócio, conferência automatizada e alertas visuais de pendências.",
    "architecture": [
      [
        "Captura de Dados",
        "Leitura automática de entradas de caixas e comprovantes em Google Sheets."
      ],
      [
        "Motor de Cruzamento",
        "Algoritmos em JavaScript/Apps Script para checagem de regras financeiras e taxas."
      ],
      [
        "Painel de Alertas",
        "Atualização em tempo real de status operacionais com semáforos de divergência."
      ]
    ],
    "gallery": [
      "Fluxo de conferência: cruzamento de dados, auditoria de taxas e validação",
      "Matriz de validação: conferência lógica e detecção de pendências"
    ],
    "link": "https://github.com/leticiamendesfr",
    "linkText": "Ver no GitHub",
    "note": "Projetado com base em rotinas financeiras e operacionais do dia a dia.",
    "decisions": [
      [
        "Foco no 80/20",
        "Automatizar primeiro a conferência de maiores volumes de transações onde ocorria a maior parte dos erros manuais."
      ],
      [
        "Sinalização Clara de Pendências",
        "Alertar apenas o que exige intervenção humana, evitando sobrecarga de notificações."
      ]
    ],
    "validation": [
      [
        "Cenários de Teste",
        "Validação com múltiplos cenários de caixas e variações de recebíveis."
      ]
    ],
    "resources": [
      [
        "Abrir Arquitetura de Operação",
        "operacao-architecture.svg"
      ],
      [
        "Abrir Matriz de Validação",
        "conferencia-validation.svg"
      ]
    ],
    "brief": {
      "problem": "Como acabar com a lentidão e os erros em conferências manuais de caixas e recebíveis de cartão?",
      "delivery": "Scripts automatizados para conciliação diária de caixas e identificação rápida de discrepâncias.",
      "focus": "Automação de rotinas → Validação lógica → Eliminação de retrabalho manual",
      "learning": "Criar automações práticas que geram impacto imediato no dia a dia da operação."
    }
  }
};
