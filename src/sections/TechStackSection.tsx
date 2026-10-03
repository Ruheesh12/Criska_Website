import React, { useEffect, useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { initSectionReveal } from '../animations/motion';

interface TechStackSectionProps {
  onOpenContact: () => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ onOpenContact }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initSectionReveal(sectionRef.current, {
      headingSelector: '.eco-heading',
      bodySelector: '.eco-body',
      itemsSelector: '.eco-item',
    });
    return () => cleanup();
  }, []);

  const matrixRows = [
    {
      capability: 'Enterprise Core Systems',
      cloud: 'Full Hyperscale Support (AWS, GCP, Azure)',
      ai: 'Sovereign LLMs & Custom Retrieval Pipelines',
      cloudSupported: true,
      aiSupported: true,
    },
    {
      capability: 'Modern Data Platforms & Warehousing',
      cloud: 'Snowflake, Databricks, BigQuery, Kafka',
      ai: 'Vector DBs (Pinecone, pgvector, Milvus)',
      cloudSupported: true,
      aiSupported: true,
    },
    {
      capability: 'DevOps & Kubernetes Infrastructure',
      cloud: 'Multi-Region EKS, GKE, Terraform, ArgoCD',
      ai: 'GPU Cluster Orchestration & vLLM Serving',
      cloudSupported: true,
      aiSupported: true,
    },
    {
      capability: 'Cybersecurity & IAM Frameworks',
      cloud: 'Zero-Trust, Okta, Vault, FedRAMP Guardrails',
      ai: 'Model Safety Filters, PII Redaction, RBAC',
      cloudSupported: true,
      aiSupported: true,
    },
    {
      capability: 'Legacy Modernization & Microservices',
      cloud: 'Strangler Fig Pattern, Event-Driven Sagas',
      ai: 'Automated Code Translation & Test Synthesis',
      cloudSupported: true,
      aiSupported: true,
    },
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="section section-dark"
      style={{
        backgroundColor: '#292929',
        color: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <div className="section-eyebrow" style={{ color: '#AAAAAA' }}>
            ECOSYSTEM & INTEGRATIONS
          </div>
          <h2
            className="section-title eco-heading"
            style={{
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Technology we work with
          </h2>
          <p
            className="body-text eco-body"
            style={{
              color: '#D4D4D4',
              margin: '0 auto',
            }}
          >
            We seamlessly integrate with the leading cloud providers, AI models, and data ecosystems
            that power today's most resilient enterprises.
          </p>
        </div>

        {/* Matrix Table */}
        <div
          className="eco-item table-container"
          style={{
            maxWidth: '1060px',
            margin: '0 auto 48px',
            overflowX: 'auto',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: '#1E1E1E',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '680px',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', backgroundColor: '#181818' }}>
                <th
                  style={{
                    padding: '24px 28px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#AAAAAA',
                    width: '38%',
                  }}
                >
                  Platform coverage
                </th>
                <th
                  style={{
                    padding: '24px 28px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    width: '31%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src="/assets/icon-table-cloud.png"
                      alt=""
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span>Cloud Architecture</span>
                  </div>
                </th>
                <th
                  style={{
                    padding: '24px 28px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    width: '31%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src="/assets/icon-table-ai.png"
                      alt=""
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <span>AI & Intelligence</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row, idx) => {
                const isHovered = activeRow === idx;
                return (
                  <tr
                    key={row.capability}
                    onMouseEnter={() => setActiveRow(idx)}
                    onMouseLeave={() => setActiveRow(null)}
                    style={{
                      borderBottom:
                        idx === matrixRows.length - 1
                          ? 'none'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                      backgroundColor: isHovered ? 'rgba(0, 86, 210, 0.08)' : 'transparent',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <td
                      style={{
                        padding: '22px 28px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: isHovered ? '#70A8FF' : '#FFFFFF',
                      }}
                    >
                      {row.capability}
                    </td>
                    <td
                      style={{
                        padding: '22px 28px',
                        fontSize: '14px',
                        color: '#CCCCCC',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={16} color="#00C853" style={{ flexShrink: 0 }} />
                        <span>{row.cloud}</span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '22px 28px',
                        fontSize: '14px',
                        color: '#CCCCCC',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={16} color="#70A8FF" style={{ flexShrink: 0 }} />
                        <span>{row.ai}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button variant="dark" onClick={onOpenContact} withArrow>
            Request Full Architecture Brief
          </Button>
        </div>
      </div>
    </section>
  );
};
