// Conteúdo dos projetos e evidências disponíveis.
const publishedMedia = {
  "clickbus-1": "assets/clickbus-dashboard.png",
  "clickbus-2": "assets/clickbus-grafana.png",
  "maestro-1": "assets/maestro-artifacts.jpg",
  "maestro-2": "assets/maestro-architecture.svg",
  "operacao-1": "assets/operacao-architecture.svg",
  "operacao-2": "assets/conferencia-validation.svg",
  "hostel-1": "assets/hostel-architecture.svg",
  "hostel-2": "assets/hostel-script-structure.svg"
};
const projects = {
  "clickbus": {
    "title": "ClickBus / Data Flow",
    "category": "Ciência de dados",
    "type": "Projeto acadêmico em grupo",
    "status": "Estudo acadêmico",
    "context": "FIAP / Enterprise Challenge",
    "intro": "Segmentação de clientes e investigação de recompra e rotas a partir de dados de viagens.",
    "tags": [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PostgreSQL",
      "pgvector",
      "Grafana"
    ],
    "sections": [
      [
        "Contexto e problema de negócio",
        "Projeto acadêmico do Grupo 50 — Data Flow, no Enterprise Challenge da FIAP com a ClickBus. A base anonimizada foi usada para investigar três perguntas: quem são os clientes, quando podem voltar a comprar e qual trecho podem escolher."
      ],
      [
        "Segmentação de clientes",
        "A análise combina recência, frequência e valor monetário (RFM), indicadores e coortes. O dashboard organiza perfis como Campeões, VIP sazonal, Regulares e Em risco, permitindo comparar retenção e a evolução dos segmentos ao longo do tempo."
      ],
      [
        "Modelagem preditiva",
        "O README descreve classificação binária para recompra em 7 e 30 dias e classificação multiclasse para o próximo trecho. HistGradientBoostingClassifier é citado na modelagem; regressão para estimar dias até a próxima compra aparece como extensão do desafio."
      ],
      [
        "Da análise à consulta",
        "A stack documentada reúne Python, Pandas e NumPy na análise, Scikit-learn na modelagem, PostgreSQL na camada de dados e Grafana na visualização. O trabalho também descreve um chatbot sobre as predições vetorizadas com pgvector, OpenAI Embeddings e SentenceTransformers."
      ],
      [
        "O que as telas mostram",
        "A primeira captura reúne matriz RFM, preferência por destino, distribuição mensal, coorte de retenção e transição entre segmentos. A segunda apresenta probabilidades em 7/30 dias, estimativa até a próxima compra, trecho previsto e a área do chatbot."
      ],
      [
        "Resultados e autoria",
        "As telas e o escopo estão disponíveis no repositório público. Os objetivos de +15% em recompra e +20 pontos de NPS descritos no README são metas de negócio, não resultados medidos. O trabalho é coletivo: Letícia Mendes Ferreira, Silvielen Maynara Couto e Thales Yoshikawa. Não atribuo individualmente partes sem documentação."
      ]
    ],
    "diagram": "assets/clickbus-architecture.svg",
    "diagramCaption": "Arquitetura documentada no README do grupo: preparação, modelos, persistência e apresentação. Não é confirmação de uma implantação de produção.",
    "architecture": [
      [
        "Dados",
        "Base anonimizada de compras e viagens para responder às perguntas de comportamento, recompra e próximo trecho."
      ],
      [
        "Análise e modelos",
        "Python, Pandas e NumPy na análise; RFM, coortes e Scikit-learn nos estudos preditivos."
      ],
      [
        "Persistência",
        "PostgreSQL na camada de dados e pgvector para os dados de predição vetorizados descritos no projeto."
      ],
      [
        "Visualização e consulta",
        "Grafana apresenta segmentos e previsões. O README descreve também uma interface de chatbot com embeddings para consulta."
      ]
    ],
    "gallery": [
      "Dashboard: perfis, retenção e evolução dos segmentos",
      "Previsões de próxima viagem e interface de consulta"
    ],
    "link": "https://github.com/leticiamendesfr/desafio-clickbus-dataflow",
    "linkText": "Repositório do projeto",
    "note": "Capturas do repositório público do grupo. Os números pertencem à base do estudo acadêmico; não representam impacto comercial medido.",
    "decisions": [
      [
        "RFM e coortes",
        "Relacionar perfis de valor ao comportamento de retenção, em vez de apresentar apenas totais."
      ],
      [
        "Janelas de 7 e 30 dias",
        "Separar horizontes de recompra relevantes para a pergunta de negócio."
      ],
      [
        "BI e consulta em linguagem natural",
        "Apresentar análises visuais e explorar perguntas sobre os dados de predição."
      ]
    ],
    "validation": [
      [
        "Documentação consultada",
        "README e duas capturas reais conferidos no repositório público."
      ],
      [
        "Modelos",
        "Arquitetura e algoritmos conforme o README; os notebooks e métricas de avaliação não estão no conteúdo público consultado."
      ],
      [
        "Impacto",
        "Metas de recompra e NPS tratadas como objetivos, sem convertê-las em resultados."
      ]
    ],
    "resources": [
      [
        "Ver documentação pública",
        "https://github.com/leticiamendesfr/desafio-clickbus-dataflow"
      ],
      [
        "Abrir dashboard",
        "assets/clickbus-dashboard.png"
      ],
      [
        "Abrir previsões e chatbot",
        "assets/clickbus-grafana.png"
      ]
    ],
    "brief": {
      "problem": "Como entender o comportamento de compra e estudar a próxima viagem de cada cliente?",
      "delivery": "Segmentação RFM, coortes de retenção, modelos de recompra e próximo trecho, dashboards e consulta às predições.",
      "focus": "Análise exploratória → modelagem → visualização",
      "learning": "Conectar uma pergunta de negócio à preparação dos dados, à escolha dos modelos e à leitura dos resultados."
    }
  },
  "maestro": {
    "title": "DataOps Workstation: Auditoria & IA",
    "category": "Aplicações e automação",
    "type": "Projeto aplicado / Engenharia de Dados",
    "status": "Em desenvolvimento local",
    "context": "Maestro OS / Operações e rotinas analíticas",
    "intro": "Workstation local para verificação estrutural de planilhas, qualidade de dados e geração de relatórios auditáveis, com cálculos determinísticos e IA consultiva.",
    "tags": [
      "Node.js",
      "JavaScript",
      "Data Quality",
      "Google Workspace API",
      "Playwright",
      "OmniRoute",
      "XLSX / PDFKit"
    ],
    "sections": [
      [
        "O problema operacional",
        "Planilhas financeiras e operacionais exigem atenção a campos vazios, formatos monetários e registros ambíguos. O projeto investiga como transformar essas entradas em relatórios rastreáveis, sem depender de um modelo de linguagem para calcular totais ou confirmar pagamentos."
      ],
      [
        "Aritmética determinística e IA consultiva",
        "O módulo money.js interpreta valores monetários e trabalha com centavos inteiros. O fluxo de planilhas separa totais por coluna e bloqueia totais quando encontra formatos inválidos ou ambíguos. Isso é verificação estrutural: não comprova conciliação com extratos. O chat via LLM é um fluxo consultivo separado."
      ],
      [
        "Qualidade de dados",
        "O módulo Data Quality avalia completude e sinaliza valores numéricos a mais de 2,5 desvios-padrão da média. A detecção de duplicidades depende de uma chave primária informada; o fluxo principal de auditoria não a fornece. Os alertas apoiam a revisão e não provam erro ou fraude."
      ],
      [
        "Tratamento de dados sensíveis",
        "Há uma função de mascaramento por expressões regulares para padrões de telefone, CPF, e-mail e chave PIX em formato UUID. Ela é utilizada na classificação de texto, mas não é aplicada automaticamente a toda chamada externa do chat. O recurso não garante anonimização completa nem conformidade com a LGPD."
      ],
      [
        "Google Drive e gateway de modelos",
        "O cliente Drive implementa OAuth com renovação de token, listagem de arquivos e exportação CSV de planilhas. No fluxo principal, a listagem retorna até 20 metadados e a análise do conteúdo pede exportar e anexar o arquivo. OmniRoute intermedeia as chamadas de chat, condicionado à configuração e autenticação. As integrações não foram revalidadas ao vivo nesta atualização."
      ],
      [
        "Testes e execução local",
        "A suíte local de 23 testes cobre situações como parsing monetário, entradas ausentes, persistência e falhas. O servidor usa endereço local e valida Origin e Host. Os testes verificam comportamento de software; não demonstram operação contínua nem conexão atual com contas externas."
      ]
    ],
    "diagram": "assets/maestro-architecture.svg",
    "diagramCaption": "Diagrama do núcleo de planilhas, baseado na documentação da implementação local. Outros módulos e integrações foram omitidos para manter esta visão legível.",
    "architecture": [
      [
        "Entrada e limites",
        "Interface HTML e servidor HTTP nativo em Node.js. O processamento começa após a validação do arquivo e da operação solicitada."
      ],
      [
        "Processamento",
        "agent.js coordena a leitura. money.js interpreta valores de forma conservadora e impede totais com entradas ambíguas."
      ],
      [
        "Persistência",
        "storage.js registra estado e histórico em JSON. As pendências são mantidas no resultado."
      ],
      [
        "Saídas",
        "artifacts.js gera os arquivos com XLSX e PDFKit. A origem de cada registro fica disponível no relatório."
      ]
    ],
    "gallery": [
      "Interface real: arquivos gerados em execução com dados fictícios",
      "Arquitetura do núcleo local de planilhas"
    ],
    "note": "Demonstração isolada. Os anexos contêm apenas registros fictícios e não confirmam recebimentos ou conciliação financeira.",
    "decisions": [
      [
        "Centavos inteiros",
        "Evitar perda de precisão e conservar a interpretação dos valores de origem."
      ],
      [
        "Pendências explícitas",
        "Bloquear um total ambíguo é preferível a devolver um número aparentemente confiável."
      ],
      [
        "Um processo local",
        "Servidor HTTP nativo e persistência JSON mantêm o escopo da aplicação compatível com uma instalação local."
      ]
    ],
    "validation": [
      [
        "23 testes locais passaram",
        "Parsing monetário, todas as abas, XLSX/PDF, persistência, migração e falhas de fonte/modelo."
      ],
      [
        "Execução de demonstração",
        "Uma instância isolada processou dados fictícios e gerou os dois arquivos disponíveis abaixo."
      ],
      [
        "Limite da evidência",
        "Os testes não certificam contas externas, regras financeiras reais ou integrações dependentes de autenticação."
      ]
    ],
    "resources": [
      [
        "Baixar planilha de entrada fictícia",
        "assets/maestro-entrada-exemplo.xlsx"
      ],
      [
        "Baixar XLSX gerado",
        "assets/maestro-relatorio-exemplo.xlsx"
      ],
      [
        "Abrir PDF gerado",
        "assets/maestro-relatorio-exemplo.pdf"
      ]
    ],
    "brief": {
      "problem": "Como verificar planilhas com rigor numérico e rastreabilidade, usando IA apenas em um fluxo consultivo?",
      "delivery": "Aplicação modular em Node.js com leitura de múltiplas abas, qualidade de dados, cálculos em centavos e relatórios XLSX/PDF.",
      "focus": "Ingestão → Validação estrutural → Pendências → Relatórios",
      "learning": "Separar regras de dados e linguagem natural; tratar tipos, ambiguidades, integrações e limites de privacidade explicitamente."
    }
  },
  "operacao": {
    "title": "Fluxos de conferência",
    "category": "Aplicações e automação",
    "type": "Automação de processos",
    "status": "Validação operacional pendente",
    "context": "Planilhas / Apps Script",
    "intro": "Scripts para separar conferência de cartões e controle de ingressos, com critérios claros e divergências visíveis.",
    "tags": [
      "Google Apps Script",
      "JavaScript",
      "Google Sheets",
      "Testes locais"
    ],
    "sections": [
      [
        "Contexto e separação de responsabilidades",
        "Conferência de cartões e controle de ingressos são processos relacionados, mas não equivalentes. A solução separa os dois scripts no mesmo projeto Apps Script, com relatórios, menus e execução independentes."
      ],
      [
        "Leitura compartilhada",
        "Os fluxos reutilizam carregarFontes_ e os utilitários do principal. O controle de ingressos reaproveita os dados já lidos, evitando repetir abertura de planilhas. Falhas identificam a etapa: abertura, leitura, montagem ou envio."
      ],
      [
        "Critérios de associação",
        "Valores, datas e identificadores precisam sustentar a associação. A descrição serve para triagem e contexto. NSU explicitamente rotulado é preservado com zeros iniciais e fica separado de outros códigos que não são necessariamente um NSU."
      ],
      [
        "Classificação com incerteza",
        "Aliases conhecidos agrupam variações de confrontos. Adversários ambíguos, quantidades conflitantes e origens de pagamento incertas geram pendências. Comissão não é convertida em preço integral, e quantidade de ingressos não é inferida apenas do valor pago."
      ],
      [
        "Privacidade e saídas",
        "O texto livre completo não é exportado por padrão. Os relatórios usam rótulos operacionais e referência de linha; as saídas separam comissões e categorias que não pertencem ao controle de futebol. A execução do controle não cria abas nem marca checks."
      ],
      [
        "Validação e uso",
        "Os 40 testes locais passaram nesta revisão com fontes fictícias e serviços simulados. Cobrem menus, independência dos relatórios, aliases, valores, conflitos, minimização de texto e cota de e-mail. A instalação e o comportamento nas contas reais precisam de validação operacional."
      ]
    ],
    "diagram": "assets/operacao-architecture.svg",
    "diagramCaption": "Separação lógica dos dois scripts preparados. Representa a estrutura do código, não uma confirmação de acesso ou execução nas contas reais.",
    "architecture": [
      [
        "Fontes",
        "Leitura compartilhada das planilhas configuradas, com identificação de falhas por etapa."
      ],
      [
        "Cartões",
        "Aplicação dos critérios de comparação e identificação de divergências."
      ],
      [
        "Ingressos",
        "Classificação separada e montagem do controle, sem exigir duplicação do mesmo ingresso nas duas fontes."
      ],
      [
        "Relatórios",
        "Saídas próprias para cada fluxo. Nenhum disparo real de e-mail foi feito durante os testes locais."
      ]
    ],
    "gallery": [
      "Separação dos scripts e das saídas",
      "Resumo da verificação local: 40 cenários aprovados"
    ],
    "note": "Os exemplos e a verificação usam dados fictícios. IDs de planilhas, destinatários e código com configuração privada não são publicados.",
    "decisions": [
      [
        "Dois fluxos, utilitários comuns",
        "Separar regras de negócio mantendo uma leitura consistente das fontes."
      ],
      [
        "Não inferir recebimento",
        "Manter casos sem evidência como pendências para revisão humana."
      ],
      [
        "Texto livre fora da saída padrão",
        "Reduzir a exposição de nomes e informações escritas nas anotações."
      ]
    ],
    "validation": [
      [
        "40 testes passaram",
        "Execução local do test_separados.cjs, sem acesso às planilhas reais."
      ],
      [
        "Casos cobertos",
        "Cabeçalhos, NSU, aliases, datas, comissões, quantidades, valores conflitantes e cota de envio."
      ],
      [
        "Integração operacional",
        "Não há confirmação de implantação, leitura real ou envio de e-mail em contas de produção nesta revisão."
      ]
    ],
    "resources": [
      [
        "Ver resumo dos testes",
        "assets/conferencia-validation.svg"
      ]
    ],
    "brief": {
      "problem": "Como conferir cartões e acompanhar lançamentos de ingressos sem confundir registro operacional com pagamento?",
      "delivery": "Dois fluxos em Apps Script: conferência de cartões e controle de ingressos, com regras próprias, pendências e relatórios.",
      "focus": "Fontes → regras de conferência → revisão",
      "learning": "Traduzir exceções da operação em regras explícitas, preservar a origem dos registros e testar situações ambíguas."
    }
  },
  "hostel": {
    "title": "Hostel Reels Lab",
    "category": "IA e conteúdo",
    "type": "Laboratório de conteúdo com IA",
    "status": "Protótipo documentado",
    "context": "Roteiros e experimentos para hospitalidade",
    "intro": "Um laboratório para transformar referências e contexto de marca em roteiros de vídeos curtos, variações A/B e uma decisão editorial humana.",
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Gemini",
      "Saídas estruturadas"
    ],
    "sections": [
      [
        "O problema",
        "Produzir vídeos curtos envolve mais do que pedir uma legenda à IA. O roteiro precisa conversar com o público, caber na operação do hostel e usar apenas ofertas, experiências e características que possam ser confirmadas."
      ],
      [
        "Contexto e referências",
        "O fluxo parte do perfil do hostel: cidade, público, diferenciais, oferta, tom de voz e restrições. As referências podem trazer legendas, métricas, duração, gancho e CTA. A análise deve distinguir evidência, inferência e dado ausente, sem assumir que um link foi acessado."
      ],
      [
        "Pipeline documentado",
        "O registro técnico de setembro descreve três etapas sequenciais: Strategy reúne evidências e conceitos; Scripts organiza roteiros em versões A/B; Review aponta problemas e correções. As respostas usam estrutura JSON para alimentar a interface. A documentação também contém arquiteturas exploratórias mais amplas, que não são apresentadas aqui como funcionalidades confirmadas."
      ],
      [
        "Roteiros e experimentos",
        "As saídas previstas incluem gancho, cenas, texto na tela, legenda, CTA, materiais de gravação e fatos a validar. Cada variação descreve hipótese, variável controlada, métrica e janela de observação. Ter versões A/B preparadas não significa que um experimento foi publicado ou apresentou resultado."
      ],
      [
        "Interface para usos diferentes",
        "As telas registradas separam um modo de equipe, voltado ao contexto da marca e à revisão de roteiros, de um modo de laboratório, com referências e organização do pipeline. O objetivo é reduzir a exposição da complexidade técnica para quem está produzindo o conteúdo."
      ],
      [
        "Controle humano e estado atual",
        "A documentação prevê revisão e aprovação local antes de qualquer publicação. Há registros de interface, schemas e rotas de integração com Apify, Notion e serviços de agentes. Essas conexões e chamadas de geração não foram revalidadas nesta revisão do portfólio. Não há alegação de viralização, aumento de reservas ou publicação automática comprovada."
      ]
    ],
    "diagram": "assets/hostel-architecture.svg",
    "diagramCaption": "Fluxo do protótipo conforme o registro técnico de setembro: três etapas e aprovação humana. Integrações externas não foram revalidadas nesta revisão.",
    "architecture": [
      [
        "Contexto",
        "Perfil da marca, público, restrições e referências com informações fornecidas."
      ],
      [
        "Estratégia",
        "Separação de evidência, inferência e ausência; escolha dos conceitos e ângulos."
      ],
      [
        "Roteiros A/B",
        "Ganchos, cenas, legendas, hipótese e variável do experimento em saídas estruturadas."
      ],
      [
        "Revisão humana",
        "Recomendações editoriais, checagem de fatos e decisão local antes de publicar."
      ]
    ],
    "gallery": [
      "Pipeline documentado do laboratório",
      "Estrutura didática de um roteiro A/B, sem dados de marca"
    ],
    "decisions": [
      [
        "Saídas em JSON",
        "Organizar conceitos e roteiros em campos reutilizáveis pela interface."
      ],
      [
        "Evidência separada de inferência",
        "Tornar visíveis os fatos que ainda precisam de confirmação."
      ],
      [
        "Pessoa no circuito",
        "Manter a decisão editorial e a autorização de publicação com uma pessoa."
      ]
    ],
    "validation": [
      [
        "Fontes consultadas",
        "Registro técnico de setembro, guia de arquitetura e capturas salvas do protótipo."
      ],
      [
        "Limite da revisão",
        "O código executável atual e as contas dos provedores não foram revalidados nesta sessão."
      ],
      [
        "Resultado demonstrável",
        "Estrutura de fluxo, telas documentadas e esquema de saída. As artes da galeria são representações documentais, não novas execuções de IA."
      ]
    ],
    "resources": [
      [
        "Abrir arquitetura do laboratório",
        "assets/hostel-architecture.svg"
      ],
      [
        "Ver estrutura do roteiro",
        "assets/hostel-script-structure.svg"
      ]
    ],
    "note": "Caso apresentado sem ofertas reais, documentos internos, informações de hóspedes ou métricas de engajamento inventadas.",
    "brief": {
      "problem": "Como organizar referências e transformar ideias de conteúdo em roteiros que possam ser revisados e comparados?",
      "delivery": "Protótipo documentado com etapas de estratégia, roteiro e revisão; versões A/B, lista de cenas e hipóteses de teste.",
      "focus": "Referências → estratégia → roteiro → revisão humana",
      "learning": "Estruturar saídas de IA e manter a aprovação editorial humana. As integrações descritas ainda precisam de nova validação."
    }
  }
};
