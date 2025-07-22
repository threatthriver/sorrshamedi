import React from 'react';

interface Company {
  id: string;
  name: string;
  website: string;
  category: string;
  summary: string;
  products?: { name: string; url: string }[];
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <p><strong>Category:</strong> {company.category}</p>
      <p>{company.summary}</p>
      <a href={company.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
      {company.products && (
        <div>
          <h3>Products</h3>
          <ul>
            {company.products.map((product, index) => (
              <li key={index}>
                <a href={product.url} target="_blank" rel="noopener noreferrer">{product.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {company.contact && (
        <div>
          <h3>Contact</h3>
          {company.contact.phone && <p>Phone: {company.contact.phone}</p>}
          {company.contact.email && <p>Email: <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a></p>}
          {company.contact.address && <p>Address: {company.contact.address}</p>}
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
