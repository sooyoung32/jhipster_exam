package net.slipp.jhipster.repository.search;

import net.slipp.jhipster.domain.OrderItems;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the OrderItems entity.
 */
public interface OrderItemsSearchRepository extends ElasticsearchRepository<OrderItems, Long> {
}
